package com.stackroute.springboot.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.springboot.exception.UserNotFoundException;
import com.stackroute.springboot.model.User;
import com.stackroute.springboot.service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@RequestMapping("auth/v1")
public class UserAuthenticationController {
	
	private Map<String,String> map = new HashMap<>();
	
	private UserService userService;
	
	@Autowired
	public UserAuthenticationController(UserService userService) {
		super();
		this.userService = userService;
	}

	
	@GetMapping("/")
	public String serverStarted() {
		return "Authentication Server Started";
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> doLogin(@RequestBody User user){
		try {
			String jwtToken = generateToken(user.getUsername(), user.getPassword());
		
			map.put("message", "User Successfully LoggedIn");
			
			map.put("token", jwtToken);
		
		} catch (Exception e) {
			map.put("message", e.getMessage());
			map.put("token", null);
			return new ResponseEntity<>(map,HttpStatus.UNAUTHORIZED);
		}
		
		return new ResponseEntity<>(map,HttpStatus.OK);
	}

	private String generateToken(String username, String password) throws ServletException, UserNotFoundException {
		String jwtToken = "";
		if(username == null || password == null) {
			throw new ServletException("Please send valid username and password");
		}
		//validate user aginst db
		boolean flag= 	userService.validateUserService(username, password);
		if(!flag)
			throw new ServletException("Invalid Credentials");
		else {
			jwtToken = Jwts.builder()
					        .setSubject(username)
					        .setIssuedAt(new Date())
					        .setExpiration(new Date(System.currentTimeMillis() + 3000000))
					        .signWith(SignatureAlgorithm.HS256, "secret key")
					        .compact();
		}
		return jwtToken;
	}	
}