package com.stackroute.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.springboot.exception.UserAlreadyExistsException;
import com.stackroute.springboot.model.User;
import com.stackroute.springboot.service.UserService;

@RestController
@RequestMapping("api/v1")
public class UserController {

	
	private UserService userService;
	private ResponseEntity<?> responseEntity;

	@Autowired
	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}
	
	@PostMapping("/user")
	public ResponseEntity<?> saveuserToDB(@RequestBody User user) throws UserAlreadyExistsException{
		try {
			User createdUser = userService.saveUser(user);
			this.responseEntity = new ResponseEntity<>(createdUser,HttpStatus.CREATED);
		} catch (UserAlreadyExistsException exception) {
			throw exception;
		}
		catch(Exception e) {
			System.out.println(e);
			this.responseEntity = new ResponseEntity<>("Some internal error occured..", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return this.responseEntity;
	}
	
	@GetMapping("/users")
	public ResponseEntity<?> getAllUsers(){
		try {
			List<User> usersList = this.userService.getAllUsers();
			this.responseEntity = new ResponseEntity<>(usersList,HttpStatus.OK);
		} catch (Exception e) {
			this.responseEntity = new ResponseEntity<>("Some internal error occured..", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return this.responseEntity;
	}
}
