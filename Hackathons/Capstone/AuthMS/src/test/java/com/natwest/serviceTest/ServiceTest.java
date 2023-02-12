package com.natwest.serviceTest;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;

import com.natwest.Model.Customer;
import com.natwest.Model.CustomerRepository;
import com.natwest.Service.CustServiceImpl;
import com.natwest.exceptions.CustomerAlreadyRegdException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class ServiceTest {
	@Mock
	private CustomerRepository custrepo;
	@InjectMocks
	private CustServiceImpl custservice;
	private Customer CustObj;
	
	@BeforeEach
	public void setup()
	{
		CustObj = new Customer();
		
		CustObj.setFirstname("Mock");
		CustObj.setLastname("Test");
		CustObj.setEmail("Mock@gmail.com");
		CustObj.setAddress("Mock Address");
		CustObj.setAccountNumber("12345678");
		CustObj.setMobileNumber("9872233333");
		CustObj.setPassword("Test123");
		
	}
	@AfterEach
	public void tearDown()
	{
		CustObj=null;
	}
	@Test
	public void testSaveCustomer()throws CustomerAlreadyRegdException{
		 when(custrepo.save(any(Customer.class))).thenReturn(CustObj);
		
		 Customer actual= custservice.AddUser(new Customer());
		
		 assertEquals(CustObj,actual);
		 verify (custrepo,times(1)).save(any(Customer.class));
	}
	
}
