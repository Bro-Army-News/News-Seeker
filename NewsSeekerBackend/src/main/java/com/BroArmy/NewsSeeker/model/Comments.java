package com.BroArmy.NewsSeeker.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.text.SimpleDateFormat;
import java.util.Date;

@Document(collection = "commentCollection")
public class Comments {
    @Id
    private String commentId;
    private String comment;
    private String time;
    private String date;
    //private boolean checkout = true;




    UserDetails uId = new UserDetails("112","sel","tanya");


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
       //Date currentTimeDate = new Date();
       //Gives a clock looking out put with an am or pm notation
       //SimpleDateFormat currentTime = new SimpleDateFormat("h:mm a");
       //time = currentTime.format(currentTimeDate);
       return time;
    }

    public void setTime(String time) {
        //Date currentTimeDate = new Date();
        //Gives a clock looking out put with an am or pm notation
        //SimpleDateFormat currentTime = new SimpleDateFormat("h:mm a");
        //time = currentTime.format(currentTimeDate);
        this.time = time;


    }

    public String getDate() {
        //Date currentDate = new Date();

        //Gives a normal date format
        //SimpleDateFormat currentD = new SimpleDateFormat("yyyy-MM-dd");
        //date = currentD.format(currentDate);
        return date;
    }

    public void setDate(String date) {
        //Date currentDate = new Date();

        //Gives a normal date format
        //SimpleDateFormat currentD = new SimpleDateFormat("yyyy-MM-dd");
        this.date = date;
    }



}
