package com.natwest.Service;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.natwest.Model.Customer;
import com.natwest.Model.CustomerRepository;
import com.natwest.exceptions.CustomerAlreadyRegdException;
import com.natwest.exceptions.CustomerNotFoundException;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.ServletException;

@Service
public class CustServiceImpl implements ICustService{

	@Autowired
	private CustomerRepository custRepo;
	
	@Override
	public Customer AddUser(Customer custobj) throws CustomerAlreadyRegdException {
		Optional<Customer> cust = this.custRepo.findByEmail(custobj.getEmail());
		Customer cust1 = null;
		if (cust.isPresent())
			throw new CustomerAlreadyRegdException();
		
		else
			cust1 = this.custRepo.save(custobj);
		return cust1;
	}

	@Override
	public boolean validateCustomerService(String email, String password) throws CustomerNotFoundException{
		Customer cust= this.custRepo.validateCustomer(email, password);
		if (cust != null)
		return true;
		
		else 
		return false;
	}

	@Override
	public String generateToken(String email, String Password) throws ServletException, CustomerNotFoundException {
		String jwtToken = "";
		
		if(email== null || Password == null) {
			throw new ServletException("enter email and password");
		}
		
		boolean flag = validateCustomerService(email, Password);
		if (!flag) {
		throw new CustomerNotFoundException();
		
		}
		else{
			jwtToken= Jwts.builder()
					.setSubject(email)
					.setIssuedAt(new Date())
					.setExpiration(new Date(System.currentTimeMillis() + 600000))
					.signWith(SignatureAlgorithm.HS256, "Secret Key")
					.compact();
		}
		
		return jwtToken;
	}

}
