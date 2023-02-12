package com.stackroute.springboot.service;

import java.util.List;

import com.stackroute.springboot.exception.UserAlreadyExistsException;
import com.stackroute.springboot.exception.UserNotFoundException;
import com.stackroute.springboot.model.User;

public interface IUserService {
	
	public boolean validateUserService(String username, String password) throws UserNotFoundException;
	
	public User getUserByName(String name) throws UserNotFoundException;
	
	public List<User> getAllUsers();
	
	public User saveUser(User user) throws UserAlreadyExistsException;

}
