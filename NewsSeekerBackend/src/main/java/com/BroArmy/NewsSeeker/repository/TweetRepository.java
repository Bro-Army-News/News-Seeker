package com.BroArmy.NewsSeeker.repository;

import com.BroArmy.NewsSeeker.model.Tweet;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TweetRepository extends MongoRepository<Tweet, String> {

    Tweet findByTweetId(String tweetId);
}
