package com.BroArmy.NewsSeeker.controller;

import com.BroArmy.NewsSeeker.dto.TweetDto;
import com.BroArmy.NewsSeeker.service.TweetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TweetController {

    @Autowired
    private TweetService tweetService;

    @GetMapping("/sync/tweets")
    public ResponseEntity<TweetDto> syncTweets() {
        TweetDto tweetDto = new TweetDto();
        try {
            tweetService.saveTweet(tweetDto);
            tweetDto.setStatus("success");
            return new ResponseEntity<>(tweetDto, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
