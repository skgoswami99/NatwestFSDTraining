package com.nat.ms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nat.ms.exception.UserAlreadyExistsException;
import com.nat.ms.exception.UserNotFoundException;
import com.nat.ms.model.User;
import com.nat.ms.repository.IUserRepository;

@Service
public class UserServiceImpl implements IUserService 
{
	
	@Autowired
	private IUserRepository userrepo;

	@Override
	public User saveUser(User userObj) throws UserAlreadyExistsException 
	{
		Optional<User> optionalUser = this.userrepo.findById(userObj.getUserId());
		
		User addedUser=null;
		
		if(optionalUser.isPresent())
		{
			System.out.println("User details Already Exists !!!! ");
			throw new UserAlreadyExistsException();
		}
		else
		{
			addedUser = this.userrepo.save(userObj);
		}
		
	
		return addedUser;

	}

	@Override
	public User updateUser(User userObj, int userId) throws UserNotFoundException {
	
		Optional<User> optionalUser = this.userrepo.findById(userId);
		
		User uObj =null;
		User updateduser=null;
		
		if(optionalUser.isPresent())
		{
			uObj = optionalUser.get();
			
			uObj.setUsername(userObj.getUsername());
			uObj.setUserpass(userObj.getUserpass());
			
			
			updateduser = this.userrepo.save(uObj);
		}
		else
		{
			throw new UserNotFoundException();
		}
		
		
		return updateduser;
		
	}

	@Override
	public User getUserById(int userId) throws UserNotFoundException {
		
		Optional<User> optionalUser = this.userrepo.findById(userId);
		
		User userObj=null;
		
		if(optionalUser.isPresent())
		{
			userObj = optionalUser.get();
		}
		else
		{
			System.out.println("User does not Exists !!!! ");
			throw new UserNotFoundException();
		}
		
		return userObj;
	}

	@Override
	public boolean deleteUserById(int userId) throws UserNotFoundException {
		
		Optional<User> optionalUser = this.userrepo.findById(userId);
		
		boolean status=false;
		
		
		if(optionalUser.isPresent())
		{
			this.userrepo.delete(optionalUser.get());
			status=true;
		}
		else
		{
			System.out.println("User does not Exists !!!! ");
			throw new UserNotFoundException();
		}
		
		return status;
				
	}

	@Override
	public List<User> getAllUsers() {
		return this.userrepo.findAll();
	}

	@Override
	public List<User> getUserByName(String usern) {
	
		List<User> userDetails = this.userrepo.findByusername(usern);
		
		
		if(userDetails.isEmpty())
		{
			System.out.println("user does not exists !!!");
		}

		return userDetails;
	}

	@Override
	public List<User> getUserByKey(String usern) {
		List<User> userDetails = this.userrepo.findUsersByKeyword(usern);
		
		System.out.println(userDetails);
		
		if(userDetails.isEmpty())
		{
			System.out.println("user does not exists !!!");
		}

		return userDetails;
	}
}