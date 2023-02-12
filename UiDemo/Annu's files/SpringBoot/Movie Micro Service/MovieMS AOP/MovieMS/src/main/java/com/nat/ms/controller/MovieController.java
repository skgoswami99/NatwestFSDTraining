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

import com.nat.ms.exception.MovieAlreadyExistsException;
import com.nat.ms.exception.MovieNotFoundException;
import com.nat.ms.model.Movie;
import com.nat.ms.service.IMovieService;

@RestController
@RequestMapping("api/v2")
public class MovieController
{
	
//	http://localhost:8081/api/v1/deleteMovie/1001
//	http://localhost:8081/api/v1/updateMovie/1001
//	http://localhost:8081/api/v1/addMovie
//	http://localhost:8081/api/v1/getMovie/1001
//	http://localhost:8081/api/v1/getAllMovies
	
	
	@Autowired
	private IMovieService Movieservice;
	
	private ResponseEntity<?> responseentity;
	
	@PostMapping("/addMovie")
	public ResponseEntity<?> addMovieDetails(@RequestBody Movie MovieObj) throws MovieAlreadyExistsException
	{
		try
		{
		
			Movie MovieDetails =  this.Movieservice.saveMovie(MovieObj);
			
			responseentity = new ResponseEntity(MovieDetails,HttpStatus.CREATED);
		}
		catch(MovieAlreadyExistsException uaee)
		{
			
			System.out.println(uaee.getMessage());
			responseentity = new ResponseEntity("Movie Details Already Exists !!!",HttpStatus.CONFLICT);			
			
		}
		
		return responseentity;
	}
	
	
	@PutMapping("/updateMovie/{mid}")
	public ResponseEntity<?> updateMovieDetails(@RequestBody Movie MovieObj, @PathVariable String mid) throws MovieNotFoundException
	{
		try
		{
			
			Movie MovieDetails =  this.Movieservice.updateMovie(MovieObj, mid);
			
			responseentity = new ResponseEntity(MovieDetails,HttpStatus.CREATED);
		}
		catch(MovieNotFoundException uaee)
		{
			System.out.println(uaee.getMessage());
			responseentity = new ResponseEntity("Movie Does Not Exists !!!",HttpStatus.NOT_FOUND);			
		}
		
		return responseentity;
	}
	

	
	@GetMapping("/getAllMovies")
	public ResponseEntity<?> getMovieDetails()
	{
		List<Movie> MovieDetails =  this.Movieservice.getAllMovies();
		
		responseentity = new ResponseEntity(MovieDetails,HttpStatus.OK);
		
		return responseentity;
	}
	
	@GetMapping("/getMovie/{uid}")
	public ResponseEntity<?> getMovieById(@PathVariable String mid) throws MovieNotFoundException
	{		
		try
		{
			Movie MovieDetails =  this.Movieservice.getMovieById(mid);
			
			responseentity = new ResponseEntity(MovieDetails,HttpStatus.OK);

		}
		catch(MovieNotFoundException unfe)
		{
			System.out.println(unfe.getMessage());
			responseentity = new ResponseEntity("Movie Does Not Exists !!!",HttpStatus.NOT_FOUND);			
		}
		
		
		return responseentity;
	}

	
	
	@DeleteMapping("/deleteMovie/{mid}")
	public ResponseEntity<?> deleteMovieById(@PathVariable String mid) throws MovieNotFoundException
	{		
		try
		{
			boolean MovieStatus =  this.Movieservice.deleteMovieById(mid);
			
			responseentity = new ResponseEntity("Movie deleted successfully !!!",HttpStatus.OK);

		}
		catch(MovieNotFoundException unfe)
		{
			System.out.println(unfe.getMessage());
			responseentity = new ResponseEntity("Movie Does Not Exists !!!",HttpStatus.NOT_FOUND);			
		}
			
		return responseentity;
	}
}
