package com.BroArmy.NewsSeeker.service;

import com.BroArmy.NewsSeeker.model.Comments;
import com.BroArmy.NewsSeeker.repository.CommentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class CommentsService {

    @Autowired
    public CommentsRepository commentsRepository;

    public List<Comments> getTypeComments(String category) {
        List<Comments> x = commentsRepository.findByCategory(category);
        return x;
        // return commentsRepository.findByCategory(category);
    }

    public String creatComments(Comments comments,String category) {


        Date currentDate = new Date();

        //Gives a normal date format
        SimpleDateFormat currentD = new SimpleDateFormat("yyyy-MM-dd");
        String date = currentD.format(currentDate);
        comments.setDate(date);

        //"yyMMddHHmmssZ" = 010704120856-0700
        SimpleDateFormat timeZone = new SimpleDateFormat("yyMMddHHmmssZ");
        String tZone = timeZone.format(currentDate);
        comments.setDateTimeVal(tZone);
        //System.out.println(comments.getDateTimeVal());

        //Gives a clock looking out put with an am or pm notation
        SimpleDateFormat currentTime = new SimpleDateFormat("h:mm a");
        String time = currentTime.format(currentDate);
        comments.setTime(time);

        comments.setCategory(category);
        String type = comments.getCategory();




        String comment =comments.getComment();

        //if u need to call it just uncomment the following comment

        // Comments insertedComment =
        commentsRepository.insert(comments);

        return  "Category: "+ type+" Comment: "+comment+"  Time: "+ time+"  Date: "+date;

    }

    public List<Comments> getAllComments() {
        return commentsRepository.findByOrderByDateTimeValDesc();
    }
}
