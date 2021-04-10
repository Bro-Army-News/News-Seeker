package com.BroArmy.NewsSeeker.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "commentCollection")
public class Comments {
    @Id
    private String commentId;
    private String comment;

    public Comments() {
        super();
    }

    public Comments(String commentId, String comment) {
        super();
        this.commentId = commentId;
        this.comment = comment;
    }

    public String getCommentId() {
        return commentId;
    }

    public void setCommentId(String commentId) {
        this.commentId = commentId;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
