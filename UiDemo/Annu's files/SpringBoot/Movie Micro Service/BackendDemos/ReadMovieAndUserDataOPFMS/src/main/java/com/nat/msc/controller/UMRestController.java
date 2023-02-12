package com.nat.msc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nat.msc.feignconfiguration.MovieCommunication;
import com.nat.msc.feignconfiguration.UserCommunication;
import com.nat.msc.model.Movie;
import com.nat.msc.model.User;

@RestController
@RequestMapping("/path")
public class UMRestController 
{
	
	@Autowired
	private MovieCommunication moviec;
	
	@Autowired
	private UserCommunication userc;
	
	
	@GetMapping("/allMovies")
	public List<Movie> getMovieInfo()
	{
		return moviec.getAllMovies();
	}
	
	@GetMapping("/movie/{mid}")
	public Movie getMovieInfo(@PathVariable String mid)
	{
		return moviec.getMovieById(mid);
	}
	
	
	@PostMapping("/addMovie")
	public Movie addMovieInfo(@RequestBody Movie mObj)
	{
		return moviec.saveMovie(mObj);
	}	
	
	@GetMapping("/allUsers")
	public List<User> getUserInfo()
	{
		return userc.getAllUsers();
	}
	
	

}
