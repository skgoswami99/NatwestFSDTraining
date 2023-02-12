package com.nat.ms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nat.ms.exception.MovieAlreadyExistsException;
import com.nat.ms.exception.MovieNotFoundException;
import com.nat.ms.model.Movie;
import com.nat.ms.repository.IMovieRepository;

@Service
public class MovieServiceImpl implements IMovieService 
{
	
	@Autowired
	private IMovieRepository movierepo;
	
	@Override
	public Movie saveMovie(Movie MovieObj) throws MovieAlreadyExistsException {
		
		Optional<Movie> movieDetails = this.movierepo.findById(MovieObj.getMovieId());
		
		Movie movieAdded=null;
		
		if(movieDetails.isPresent())
		{
			throw new MovieAlreadyExistsException();
		}
		else
		{
			movieAdded = this.movierepo.save(MovieObj);
		}
		
		return movieAdded;
	}

	@Override
	public Movie updateMovie(Movie MovieObj, String MovieId) throws MovieNotFoundException {
		
		Optional<Movie> movieDetails = this.movierepo.findById(MovieId);
		
		Movie mObj=null;
		Movie movieUpdated=null;
		
		if(movieDetails.isPresent())
		{
			
			mObj = movieDetails.get();
						
			mObj.setMovieTitle(MovieObj.getMovieTitle());
			mObj.setMovieDesc(MovieObj.getMovieDesc());
			mObj.setMovieGenre(MovieObj.getMovieGenre());
			
			movieUpdated = this.movierepo.save(mObj);
		}
		else
		{			
			throw new MovieNotFoundException();
		}
		
		return movieUpdated;
	}

	@Override
	public Movie getMovieById(String MovieId) throws MovieNotFoundException 
	{
	
		Optional<Movie> movieDetails = this.movierepo.findById(MovieId);
		
		Movie mObj=null;
		
		if(movieDetails.isPresent())
		{
			
			mObj = movieDetails.get();
						
		}
		else
		{			
			throw new MovieNotFoundException();
		}
		
		return mObj;
		
	}

	@Override
	public boolean deleteMovieById(String MovieId) throws MovieNotFoundException {
		
		Optional<Movie> movieDetails = this.movierepo.findById(MovieId);
		
		boolean mObj;
		
		if(movieDetails.isPresent())
		{
			this.movierepo.delete(movieDetails.get());
			mObj=true;			
		}
		else
		{	
			mObj=false;
			throw new MovieNotFoundException();
		}
		
		return mObj;
	}

	@Override
	public List<Movie> getAllMovies() {
		// TODO Auto-generated method stub
		return this.movierepo.findAll();
	}
}
