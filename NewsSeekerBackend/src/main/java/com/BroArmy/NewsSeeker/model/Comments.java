package com.BroArmy.NewsSeeker.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.annotation.Generated;
import java.text.SimpleDateFormat;
import java.util.Date;

@Document(collection = "commentCollection")
public class Comments {
    @Id
    private String commentId;
    private String comment;
    private String time;
    private String date;

    private String dateTimeVal;





    UserDetails uId = new UserDetails("113","kira","tanya");


    public Comments() {
        super();
    }

    public Comments( String comment, String time) {
        super();
        this.comment = comment;
        this.time = time;

    }

    public String getCommentId() {

       String commentId = uId.getFirstName() +"."+ uId.getUserDetailsId();

       return commentId;

    }

    public void setCommentId(String commentId) {
        this.commentId= commentId;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getTime() {

       return time;
    }

    public void setTime(String time) {

        this.time = time;

    }

    public String getDate() {

        return date;
    }

    public void setDate(String date) {

        this.date = date;
    }

    public String getDateTimeVal() {


        return dateTimeVal;
    }

    public void setDateTimeVal(String dateTimeVal) {
        this.dateTimeVal = dateTimeVal;
    }
}
