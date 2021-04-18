package com.BroArmy.NewsSeeker.service;

import com.BroArmy.NewsSeeker.dto.TweetDto;
import org.springframework.stereotype.Service;

@Service
public interface TweetService {

    public void saveTweet(TweetDto tweetDto);
}
