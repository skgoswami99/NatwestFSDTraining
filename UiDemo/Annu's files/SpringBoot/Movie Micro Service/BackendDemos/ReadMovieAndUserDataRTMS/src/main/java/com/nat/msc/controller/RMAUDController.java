package com.nat.msc.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClientException;

import com.nat.msc.service.ReadDataService;

@RestController
@RequestMapping("api/v3/cons")
public class RMAUDController 
{
	
	@Autowired
	private ReadDataService rdservice;
	
	
	@GetMapping("/alldata")
	public String getAllData() throws IOException, RestClientException
	{
		return rdservice.getmovieUserData();
	}

}
