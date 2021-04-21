package com.BroArmy.NewsSeeker.service;

import com.BroArmy.NewsSeeker.dto.TweetDto;
import com.BroArmy.NewsSeeker.model.Tweet;
import com.BroArmy.NewsSeeker.repository.TweetRepository;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.config.CookieSpecs;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;

@Service
public class TweetServiceImpl implements TweetService {

    @Autowired
    private TweetRepository tweetRepository;

    @Autowired
    Environment environment;

    @Override
    public void saveTweet(TweetDto tweetDto) {
        String response = null;
        try {
            String[] userIdList = {"759251", "140784400", "428333", "2097571", "5402612", "742143", "176337215", "37034483", "16542390"};
            for (String id : userIdList)
            {
                response = getTweets(id, environment.getProperty("twitter.token"));
                JSONObject jsonObject = new JSONObject(response);
                JSONArray dataList = jsonObject.getJSONArray("data");
                for (int i = 0 ; i < dataList.length(); i++) {
                    JSONObject obj = dataList.getJSONObject(i);
                    String tweetId = obj.getString("id");
                    String text = obj.getString("text");

                    Tweet tweetObj = tweetRepository.findByTweetId(tweetId);
                    if (tweetObj == null){
                        Tweet tweet = new Tweet();
                        tweet.setTweetId(tweetId);
                        tweet.setText(text);
                        tweet.setUserId(id);
                        tweet.setClassName(1);
                        tweetRepository.save(tweet);
                        System.out.println("tweet saved = "+tweetId);
                    }else {
                        System.out.println("tweet exist = "+tweetObj.getTweetId());
                    }

                }

                System.out.println("completed, user id = "+id);

                //use meta data for pagination
                JSONObject meta = jsonObject.getJSONObject("meta");
                //System.out.println("response = "+dataList.length()+ "  "+meta.toString());
            }

        } catch (IOException e) {
            e.printStackTrace();
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
    }

    /*
     * This method calls the v2 User Tweet timeline endpoint by user ID
     * */
    private static String getTweets(String userId, String bearerToken) throws IOException, URISyntaxException {
        String tweetResponse = null;

        HttpClient httpClient = HttpClients.custom()
                .setDefaultRequestConfig(RequestConfig.custom()
                        .setCookieSpec(CookieSpecs.STANDARD).build())
                .build();

        URIBuilder uriBuilder = new URIBuilder(String.format("https://api.twitter.com/2/users/%s/tweets?max_results=100", userId));
        ArrayList<NameValuePair> queryParameters;
        queryParameters = new ArrayList<>();
        queryParameters.add(new BasicNameValuePair("tweet.fields", "created_at"));
        uriBuilder.addParameters(queryParameters);

        HttpGet httpGet = new HttpGet(uriBuilder.build());
        httpGet.setHeader("Authorization", String.format("Bearer %s", bearerToken));
        httpGet.setHeader("Content-Type", "application/json");

        HttpResponse response = httpClient.execute(httpGet);
        HttpEntity entity = response.getEntity();
        if (null != entity) {
            tweetResponse = EntityUtils.toString(entity, "UTF-8");
        }

        return tweetResponse;

    }
}
