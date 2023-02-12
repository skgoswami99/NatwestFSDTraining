package com.example.myuserservice.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity

public class User
{
    @Id
    private int userId;

    private String username;
    
    private String userpass;

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getUserpass() {
		return userpass;
	}

	public void setUserpass(String userpass) {
		this.userpass = userpass;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", username=" + username + ", userpass=" + userpass + "]";
	}

    
}
