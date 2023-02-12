package com.example.myuserservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.myuserservice.model.User;
import com.example.myuserservice.service.IUserService;



// localhost:8081/api/v1/getuserDetails

@RestController
@RequestMapping("api/v1") 
public class UserController 
{
	
	@Autowired
	private IUserService userservice;
	
	private ResponseEntity<?> responseentity;
	
	@PostMapping("/addUser")
	public ResponseEntity<?> addUserHandler(@RequestBody User userObj)
	{
		User usercreated = this.userservice.saveUser(userObj);
		responseentity = new ResponseEntity(usercreated,HttpStatus.CREATED);
		return responseentity;
	}
	

	@GetMapping("/getUDetails")
	public ResponseEntity<?> getAllUserHandler()
	{
		responseentity = new ResponseEntity(this.userservice.getAllUsers(),HttpStatus.OK);
		return responseentity;
	}
	
	@GetMapping("/getUserById/{uid}")
	public ResponseEntity<?> getUserByIdHandler(@PathVariable int uid)
	{
		User uObj = this.userservice.getUserById(uid);
		responseentity = new ResponseEntity(uObj,HttpStatus.OK);
		return responseentity;
	}
	
	@DeleteMapping("/delUserById/{uid}")
	public ResponseEntity<?> deleteUserByIdHandler(@PathVariable int uid)
	{
		boolean status = this.userservice.deleteUser(uid);
		responseentity = new ResponseEntity("user deleted successfully !!!",HttpStatus.OK);
		return responseentity;
	}
	

	@PutMapping("/updateUserById/{uid}") // {uid} given in path as we needed to pass an Id in the postman link
	public ResponseEntity<?> updateUserByIdHandler(@RequestBody User userObj, @PathVariable int uid)
			// @RequestBody means the input we are geting in http request
	{
		User uObj = this.userservice.updateUser(userObj,uid); // called our method we created as updateUser in UserServiceImpl.java
		responseentity = new ResponseEntity(uObj,HttpStatus.OK);
		return responseentity;
	}
}
