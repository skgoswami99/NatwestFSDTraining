package com.nat.ms.service;

import java.util.List;

import com.nat.ms.exception.UserAlreadyExistsException;
import com.nat.ms.exception.UserNotFoundException;
import com.nat.ms.model.User;

public interface IUserService 
{
	
	public User saveUser(User userObj) throws UserAlreadyExistsException;

	public User updateUser(User userObj,int userId) throws UserNotFoundException;
	
	public User getUserById(int userId) throws UserNotFoundException;
	
	public List<User> getUserByName(String usern);
	
	public List<User> getUserByKey(String usern);
	
	public boolean deleteUserById(int userId) throws UserNotFoundException;
	
	public List<User> getAllUsers();

}
