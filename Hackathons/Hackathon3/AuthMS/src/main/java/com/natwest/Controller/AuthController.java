package com.natwest.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.natwest.Model.Customer;
import com.natwest.Service.ICustService;
import com.natwest.exceptions.CustomerAlreadyRegdException;
import com.natwest.exceptions.CustomerNotFoundException;

import jakarta.servlet.ServletException;

@RestController
@CrossOrigin("*")
@RequestMapping("auth")
public class AuthController {

	@Autowired
	private ICustService custServ;
	
	
	Map<String, String> map = new HashMap<>();
	
	@PostMapping("/register")
	public ResponseEntity<?> AddUserDetails (@RequestBody Customer custObj) throws CustomerAlreadyRegdException{
		
		Customer cust = this.custServ.AddUser(custObj);
		return new ResponseEntity(cust, HttpStatus.CREATED);
	};
	
	@PostMapping("/login")
	public ResponseEntity<?> ValidatingCustomerLogin (@RequestBody Customer custObj) throws CustomerNotFoundException, ServletException{
//		boolean validationStatus = this.custServ.validateCustomerService(custObj.getEmail(), custObj.getPassword());
//		String msg = null;
//		if (!validationStatus){
//			throw new CustomerNotFoundException();
//		}
//		msg = "logged in successfully";
		
		String token = custServ.generateToken(custObj.getEmail(), custObj.getPassword());
		
		map.put("access_token", token);
		map.put("msg", "Logged in Successfully");
		
		return new ResponseEntity(map, HttpStatus.OK);
			
	}
	
	Map<String, String> map1 = new HashMap<>();
	@PostMapping("/isAuthenticated")
	public ResponseEntity<?> checkAuth (@RequestHeader String authObj){
		System.out.print(authObj.toString());
		map1.put("isAuthenticated", "true");
		return new ResponseEntity(map1, HttpStatus.OK);
		
	
	}
	
}
