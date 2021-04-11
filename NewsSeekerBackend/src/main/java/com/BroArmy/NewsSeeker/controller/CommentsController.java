package com.BroArmy.NewsSeeker.controller;

import com.BroArmy.NewsSeeker.model.Comments;
import com.BroArmy.NewsSeeker.repository.CommentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.BroArmy.NewsSeeker.model.Comments.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
public class CommentsController {

    @Autowired
    public CommentsRepository commentsRepository ;

    @GetMapping(value = "/all")
    public List<Comments> getAllComments(){
       return commentsRepository.findAll();
    }
    @PostMapping(value = "/create")
    public String publishComments(@RequestBody Comments comments){


        Date currentDate = new Date();

        //Gives a normal date format
        SimpleDateFormat currentD = new SimpleDateFormat("yyyy-MM-dd");
        String date = currentD.format(currentDate);
        comments.setDate(date);




        Date currentTimeDate = new Date();
        //Gives a clock looking out put with an am or pm notation
        SimpleDateFormat currentTime = new SimpleDateFormat("h:mm a");
        String time = currentTime.format(currentTimeDate);
        comments.setTime(time);
        System.out.println(comments.getTime());



        String id = comments.getCommentId();
        String comment =comments.getComment();

        //if u need to call it just uncomment the following comment

       // Comments insertedComment =
        commentsRepository.insert(comments);
        return "Comment ID: "+id+"  Comment: "+comment+"  Time: "+ time+"  Date: "+date;


    }




}
