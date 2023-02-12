package com.nat.ms.service;

import java.util.List;

import com.nat.ms.exception.MovieAlreadyExistsException;
import com.nat.ms.exception.MovieNotFoundException;
import com.nat.ms.model.Movie;

public interface IMovieService 
{
	public Movie saveMovie(Movie MovieObj) throws MovieAlreadyExistsException;

	public Movie updateMovie(Movie MovieObj,String mid) throws MovieNotFoundException;
	
	public Movie getMovieById(String MovieId) throws MovieNotFoundException;
	
	public boolean deleteMovieById(String MovieId) throws MovieNotFoundException;
	
	public List<Movie> getAllMovies();

}
