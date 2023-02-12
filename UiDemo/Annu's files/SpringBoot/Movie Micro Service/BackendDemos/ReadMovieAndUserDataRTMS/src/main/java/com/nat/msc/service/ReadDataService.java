package com.nat.msc.service;

import java.io.IOException;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

@Service
public class ReadDataService 
{
	
	public String getmovieUserData()throws IOException, RestClientException
	{
		String movieDataURL = "http://localhost:8082/api/v2/getAllMovies";
		
		String userDataURL = "http://localhost:8081/api/v1/getAllUsers";
		
		RestTemplate movierestTemplate = new RestTemplate();
		
		RestTemplate userrestTemplate = new RestTemplate();
		
		String movieResponse=null;
		String userResponse=null;
		
		
		try
		{
			movieResponse = movierestTemplate.exchange(movieDataURL,HttpMethod.GET, getHeaders() ,String.class).getBody();
			
			userResponse = userrestTemplate.exchange(userDataURL,HttpMethod.GET, getHeaders() ,String.class).getBody();
			
		}
		catch(Exception exp)
		{
			
		}
			
		return "Movie Details ---> "+movieResponse+ ":::" + "User Details ---> "+userResponse;
	}
	
	public static HttpEntity<?> getHeaders() throws IOException
	{
		HttpHeaders headers = new HttpHeaders();
		headers.set("Accept", MediaType.APPLICATION_JSON_VALUE);
		return new HttpEntity(headers);
	}
	
	
}
