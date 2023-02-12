package com.natwest.Service;

import com.natwest.Model.Customer;
import com.natwest.exceptions.CustomerAlreadyRegdException;
import com.natwest.exceptions.CustomerNotFoundException;

import jakarta.servlet.ServletException;

public interface ICustService {
	
public Customer AddUser(Customer custobj) throws CustomerAlreadyRegdException;

public boolean validateCustomerService(String email, String password) throws CustomerNotFoundException;

public String generateToken(String email, String Password) throws ServletException, CustomerNotFoundException;
}
