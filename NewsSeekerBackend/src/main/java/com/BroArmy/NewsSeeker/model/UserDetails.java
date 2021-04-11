package com.BroArmy.NewsSeeker.model;

import java.util.List;

public class UserDetails {
    private String userDetailsId;
    private String firstName;
    private String lastName;



    public UserDetails(){

    }

    public UserDetails(String userDetailsId, String firstName, String lastName) {
        this.userDetailsId = userDetailsId;
        this.firstName = firstName;
        this.lastName = lastName;

    }

    public String getUserDetailsId() {
        return userDetailsId;
    }

    public void setUserDetailsId(String userDetailsId) {
        this.userDetailsId = userDetailsId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }


}
