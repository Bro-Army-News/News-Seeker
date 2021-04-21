package com.BroArmy.NewsSeeker.controller;

import com.BroArmy.NewsSeeker.model.Comments;
import com.BroArmy.NewsSeeker.service.CommentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
//@RequestMapping("/comments")
public class CommentsController {

    @Autowired
    public CommentsService commentsService;

    @GetMapping(value = "/all")
    public List<Comments> getAllComments(){

        return commentsService.getAllComments();
    }



    @GetMapping(value = "/type")
    public List<Comments> getTypeComments(@RequestParam(name = "category") String category){
        //String c = "covid";
       // List <Comments> covid = null ;
        //List<Comments> x = commentsRepository.findByOrderByDateTimeValDesc();
        //for (Comments i : x){
          //  if (i.getCategory().equalsIgnoreCase(c)){
          //      covid.add(i);
          //      break;
          //  }

        //}
       // MongoTemplate mongoTemplate;
        //Query query = new Query();
       // query.addCriteria(Criteria.where("name").is("Eric"));
        //List<Comments> users = mongoTemplate.find(query, Comments.class);

        return commentsService.getTypeComments(category);


    }

    @PostMapping(value = "/create")
    public String publishComments(@RequestBody Comments comments,@RequestParam(name = "category") String category){


        return commentsService.creatComments(comments,category);

    }




}
