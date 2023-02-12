package com.nat.ms.testservice;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.annotation.Rollback;

import com.nat.ms.exception.MovieAlreadyExistsException;
import com.nat.ms.model.Movie;
import com.nat.ms.repository.IMovieRepository;
import com.nat.ms.service.MovieServiceImpl;

@ExtendWith(MockitoExtension.class)
public class MovieServicetTest 
{

	@Mock
	private IMovieRepository movieRepository;
	
	@InjectMocks
	private MovieServiceImpl movieService;

	private Movie movie;

	private List<Movie> movieList;

	@BeforeEach
	public void setUp() throws Exception 
	{
		movie = new Movie();
		
		movie.setMovieId("M010");
		movie.setMovieTitle("Test Movie");
		movie.setMovieDesc("Test Movie Desc");
		movie.setMovieGenre("Test Movie Genre");
		
		movieList = new ArrayList();
		
		movieList.add(movie);
		
	}
	
	@AfterEach
	public void tearDown() throws Exception 
	{
		movie=null;
	}
	
	
	@Test
	public void testSaveMovieSuccess() throws MovieAlreadyExistsException 
	{
		when(movieRepository.save(any(Movie.class))).thenReturn(movie); 
		
		Movie actual = movieService.saveMovie(new Movie());
		
		assertEquals(movie,actual);
		
		verify(movieRepository,times(1)).save(any(Movie.class));
		
	}

	
	@Test
	public void testgetAllMovieSuccess() 
	{
		when(movieRepository.findAll()).thenReturn(movieList);
		
		List<Movie> actual = movieService.getAllMovies();
		
		assertEquals(movieList,actual);
		
		verify(movieRepository,times(1)).findAll();
		
	}

	
}
