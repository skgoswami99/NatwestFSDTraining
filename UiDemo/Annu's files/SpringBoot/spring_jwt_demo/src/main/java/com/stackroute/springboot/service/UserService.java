package com.stackroute.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.springboot.exception.UserAlreadyExistsException;
import com.stackroute.springboot.exception.UserNotFoundException;
import com.stackroute.springboot.model.User;
import com.stackroute.springboot.repository.UserRepository;

@Service
public class UserService implements IUserService {

	private UserRepository userRepository;
		
	@Autowired
	public UserService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	@Override
	public boolean validateUserService(String username, String password) throws UserNotFoundException {
		
		User user = userRepository.validateUser(username, password);
		System.out.println("user" + user);
		if(user != null)
			return true;
		else
			return false;
	}

	@Override
	public User getUserByName(String name) throws UserNotFoundException {
		
		return userRepository.findByname(name);
	}

	@Override
	public List<User> getAllUsers() {
		
		return userRepository.findAll();
	}

	@Override
	public User saveUser(User user) throws UserAlreadyExistsException {
		
		Optional<User> optional = this.userRepository.findById(user.getId());
		if(optional.isPresent()) {
			throw new UserAlreadyExistsException();
		}
		
			User createdUser = userRepository.save(user);
		
		return createdUser;
	}

}
