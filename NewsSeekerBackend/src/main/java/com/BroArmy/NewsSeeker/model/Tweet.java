package com.BroArmy.NewsSeeker.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "tweets")
public class Tweet {
    @Id
    private String id;

    private String text;
    private String className;
    private String tweetId;
    private String userId;


    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getTweetId() {
        return tweetId;
    }

    public void setTweetId(String tweetId) {
        this.tweetId = tweetId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    @Override
    public String toString() {
        return "Tweet{" +
                "id='" + id + '\'' +
                ", text='" + text + '\'' +
                ", className='" + className + '\'' +
                '}';
    }
}
