package com.stackroute.user.controller;

import java.util.HashMap;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.user.model.User;
import com.stackroute.user.service.UserAuthService;
import com.stackroute.user.util.exception.UserAlreadyExistsException;
import com.stackroute.user.util.exception.UserNotFoundException;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;


/*
 * As in this assignment, we are working on creating RESTful web service, hence annotate
 * the class with @RestController annotation. A class annotated with the @Controller annotation
 * has handler methods which return a view. However, if we use @ResponseBody annotation along
 * with @Controller annotation, it will return the data directly in a serialized 
 * format. Starting from Spring 4 and above, we can use @RestController annotation which 
 * is equivalent to using @Controller and @ResposeBody annotation
 */
@RestController
public class UserAuthController {

    /*
	 * Autowiring should be implemented for the UserAuthService. (Use Constructor-based
	 * autowiring) Please note that we should not create an object using the new
	 * keyword
	 */
	private UserAuthService userAuthService;

    public UserAuthController(UserAuthService userAuthService) {
    	this.userAuthService=userAuthService;
	}

    /*
	 * Define a handler method which will create a specific user by reading the
	 * Serialized object from request body and save the user details in the
	 * database. This handler method should return any one of the status messages
	 * basis on different situations:
	 * 1. 201(CREATED) - If the user created successfully. 
	 * 2. 409(CONFLICT) - If the userId conflicts with any existing user, 
	 * UserAlreadyExistsException is caught.
	 * 
	 * This handler method should map to the URL "/api/v1/auth/register" using HTTP POST method
	 */

    @CrossOrigin(origins="http://localhost:3000")
    @PostMapping("/api/v1/auth/register")
	public ResponseEntity<?> add(@RequestBody User usr)
	{
		Boolean flag=false;
		try {
			flag = userAuthService.saveUser(usr);
			return new ResponseEntity<Boolean>(flag,HttpStatus.CREATED);
		} catch (UserAlreadyExistsException e) {
			return new ResponseEntity<Boolean>(flag,HttpStatus.CONFLICT);
		}
		
	}


	/* 
	 * Define a handler method which will authenticate a user by reading the Serialized user
	 * object from request body containing the username and password. The username and password should be validated 
	 * before proceeding ahead with JWT token generation. The user credentials will be validated against the database entries. 
	 * The error should be return if validation is not successful. If credentials are validated successfully, then JWT
	 * token will be generated. The token should be returned back to the caller along with the API response.
	 * This handler method should return any one of the status messages basis on different
	 * situations:
	 * 1. 200(OK) - If login is successful
	 * 2. 401(UNAUTHORIZED) - If login is not successful
	 * 
	 * This handler method should map to the URL "/api/v1/auth/login" using HTTP POST method
	*/
    @CrossOrigin(origins="http://localhost:3000")
    @PostMapping("/api/v1/auth/login")
	public ResponseEntity login(@RequestBody User usr)
	{
		User user;
		try {
			user = userAuthService.findByUserIdAndPassword(usr.getUserId(), usr.getPassword());
			if(user==null)
			{
				return new ResponseEntity<String>("Invalid credentials",HttpStatus.UNAUTHORIZED);
			}
			
			String tok=generateToken(usr.getUserId());
			HashMap<String,String> mymap=new HashMap<String,String>();
			mymap.put("token", tok);
		   return new ResponseEntity<HashMap>(mymap,HttpStatus.OK);
		} catch (UserNotFoundException e) {
			// TODO Auto-generated catch block
			return new ResponseEntity<String>("Invalid credentials",HttpStatus.UNAUTHORIZED);
		}
		
	}
	
	public String generateToken(String uname)
	
	{
		long expirytime=10_00_00_0000;
		
		return Jwts.builder().setSubject(uname)
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis()+expirytime))
				.signWith(SignatureAlgorithm.HS256,"secretKey")
				.compact();
				
				
    }



}