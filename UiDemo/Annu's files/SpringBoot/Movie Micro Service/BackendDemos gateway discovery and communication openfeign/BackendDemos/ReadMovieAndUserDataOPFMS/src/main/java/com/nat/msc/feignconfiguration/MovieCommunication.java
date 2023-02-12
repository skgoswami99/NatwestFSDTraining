package com.nat.msc.feignconfiguration;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.nat.msc.model.Movie;

@FeignClient(name="MOVIE-SERVICE")
public interface MovieCommunication {

	@GetMapping("api/v2/getMovie/{MovieId}")
	public Movie getMovieById(@PathVariable String MovieId);
	
	@PostMapping("api/v2/addMovie")
	public Movie saveMovie(@RequestBody Movie mObj);
	
	@GetMapping("api/v2/getAllMovies")
	public List<Movie> getAllMovies();
	
}