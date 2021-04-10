package com.BroArmy.NewsSeeker.repository;

import com.BroArmy.NewsSeeker.model.Comments;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentsRepository extends MongoRepository<Comments,String> {
}
