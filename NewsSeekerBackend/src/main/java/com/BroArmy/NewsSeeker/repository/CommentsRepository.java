package com.BroArmy.NewsSeeker.repository;

import com.BroArmy.NewsSeeker.model.Comments;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentsRepository extends MongoRepository<Comments,String> {
   List<Comments> findByOrderByDateTimeValDesc();
   List<Comments> findByOrderByTimeDesc() ;
}
