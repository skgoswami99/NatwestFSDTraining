package com.natwest.controllerTest;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.natwest.Controller.AuthController;
import com.natwest.Model.Customer;
import com.natwest.Service.CustServiceImpl;


@WebMvcTest(AuthController.class)
public class AuthControllerTest {
	
	private Customer CustObj;
	
	@Autowired
	private MockMvc mvc;
	
	@MockBean
	private CustServiceImpl CustomerService;
	
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
	public void testAddUserSuccess() throws Exception{
	
		Mockito.when(CustomerService.AddUser(CustObj)).thenReturn(CustObj);
	
		mvc.perform(MockMvcRequestBuilders.post("/auth/register")
				.contentType(MediaType.APPLICATION_JSON)
				.content(JSON(CustObj)))
				.andExpect(status().isCreated());
	}

	
	private static String JSON(Customer custObj)
	{
		try
		{
			String obj = new ObjectMapper().writeValueAsString(custObj);
			return obj;
		}
		catch(Exception eobj)
		{
			throw new RuntimeException();
		}
	}

	

}
