package com.BroArmy.NewsSeeker.controller;

import com.BroArmy.NewsSeeker.model.Comments;
import com.BroArmy.NewsSeeker.repository.CommentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
        Comments insertedComment = commentsRepository.insert(comments);
        return "Comment ID: "+insertedComment.getCommentId()+"  Comment: "+insertedComment.getComment();
    }


}
