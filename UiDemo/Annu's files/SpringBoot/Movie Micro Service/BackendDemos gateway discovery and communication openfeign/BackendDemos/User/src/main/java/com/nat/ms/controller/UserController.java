package com.nat.ms.controller;

import java.util.List;

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

import com.nat.ms.exception.UserAlreadyExistsException;
import com.nat.ms.exception.UserNotFoundException;
import com.nat.ms.model.User;
import com.nat.ms.service.IUserService;

@RestController
@RequestMapping("api/v1")
public class UserController {

	// http://localhost:8081/api/v1/deleteUser/1001
	// http://localhost:8081/api/v1/updateUser/1001
	// http://localhost:8081/api/v1/addUser
	// http://localhost:8081/api/v1/getUser/1001
	// http://localhost:8081/api/v1/getAllUsers

	@Autowired
	private IUserService userservice;

	private ResponseEntity<?> responseentity;

	@PostMapping("/addUser")
	public ResponseEntity<?> addUserDetails(@RequestBody User userObj) throws UserAlreadyExistsException {
		try {
			User userDetails = this.userservice.saveUser(userObj);

			responseentity = new ResponseEntity(userDetails, HttpStatus.CREATED);
		} catch (UserAlreadyExistsException uaee) {
			System.out.println(uaee.getMessage());
			responseentity = new ResponseEntity("User Details Already Exists !!!", HttpStatus.CONFLICT);
		}

		return responseentity;
	}

	@PutMapping("/updateUser/{uid}")
	public ResponseEntity<?> updateUserDetails(@RequestBody User userObj, @PathVariable int uid)
			throws UserNotFoundException {
		try {
			User userDetails = this.userservice.updateUser(userObj, uid);

			responseentity = new ResponseEntity(userDetails, HttpStatus.CREATED);
		} catch (UserNotFoundException uaee) {
			System.out.println(uaee.getMessage());
			responseentity = new ResponseEntity("User Does Not Exists !!!", HttpStatus.NOT_FOUND);
		}

		return responseentity;
	}

	@GetMapping("/getAllUsers")
	public ResponseEntity<?> getUserDetails() {
		List<User> userDetails = this.userservice.getAllUsers();

		responseentity = new ResponseEntity(userDetails, HttpStatus.OK);

		return responseentity;
	}

	@GetMapping("/getUser/{uid}")
	public ResponseEntity<?> getUserById(@PathVariable int uid) throws UserNotFoundException {
		try {
			User userDetails = this.userservice.getUserById(uid);

			responseentity = new ResponseEntity(userDetails, HttpStatus.OK);

		} catch (UserNotFoundException unfe) {
			System.out.println(unfe.getMessage());
			responseentity = new ResponseEntity("User Does Not Exists !!!", HttpStatus.NOT_FOUND);
		}

		return responseentity;
	}

	@DeleteMapping("/deleteUser/{uid}")
	public ResponseEntity<?> deleteUserById(@PathVariable int uid) throws UserNotFoundException {
		try {
			boolean userStatus = this.userservice.deleteUserById(uid);

			responseentity = new ResponseEntity("User deleted successfully !!!", HttpStatus.OK);

		} catch (UserNotFoundException unfe) {
			System.out.println(unfe.getMessage());
			responseentity = new ResponseEntity("User Does Not Exists !!!", HttpStatus.NOT_FOUND);
		}

		return responseentity;
	}

	@GetMapping("/getUByName/{uname}")
	public ResponseEntity<?> getUserByName(@PathVariable String uname) {
		List<User> userDetails = this.userservice.getUserByName(uname);

		responseentity = new ResponseEntity(userDetails, HttpStatus.OK);

		return responseentity;
	}

	@GetMapping("/getUByKey/{uname}")
	public ResponseEntity<?> getUserByKey(@PathVariable String uname) {
		List<User> userDetails = this.userservice.getUserByKey(uname);

		responseentity = new ResponseEntity(userDetails, HttpStatus.OK);

		return responseentity;
	}
}