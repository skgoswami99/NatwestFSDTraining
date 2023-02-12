package com.nat.ms.testcontroller;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;

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
import com.nat.ms.controller.MovieController;
import com.nat.ms.model.Movie;
import com.nat.ms.service.MovieServiceImpl;

@WebMvcTest(MovieController.class)
public class MovieControllerTest 
{

	@Autowired
	private MockMvc mvc;
	
	@MockBean
	private MovieServiceImpl movieservice;
	
	private Movie movieObj;
	
	@BeforeEach
	public void setup()
	{
		movieObj = new Movie();
		
		movieObj.setMovieId("M001");
		movieObj.setMovieTitle("Test Movie");
		movieObj.setMovieDesc("Test Movie Desc");
		movieObj.setMovieGenre("Test Movie Genre");
		
		ArrayList movieList = new ArrayList();
		
		movieList.add(movieList);
	}
	
	@AfterEach
	public void tearDown()
	{
		movieObj=null;
	}
	
	
	@Test
	public void testSaveMovieSuccess() throws Exception
	{
		
		Mockito.when(movieservice.saveMovie(movieObj)).thenReturn(movieObj);
		
		mvc.perform(MockMvcRequestBuilders.post("/api/v2/addMovie")
				.contentType(MediaType.APPLICATION_JSON)
				.content(asJSON(movieObj)))
				.andExpect(status().isCreated());
	}
	
//	@Test
//	public void testSaveMovieFailure() throws Exception
//	{
//		
//		Mockito.when(movieservice.saveMovie(movieObj)).thenReturn(movieObj);
//		
//		mvc.perform(MockMvcRequestBuilders.post("/api/v2/addMovie")
//				.contentType(MediaType.APPLICATION_JSON)
//				.content(asJSON(movieObj)))
//				.andExpect(status().isCreated());	
//	}
//	
//	@Test
//	public void testGetMovieSuccess() throws Exception
//	{
//		
//		Mockito.when(movieservice.getAllMovies()).thenReturn();
//		
//		mvc.perform(MockMvcRequestBuilders.post("/api/v2/addMovie")
//				.andExpect(status().is);	
//	}
	
	
	
	private static String asJSON(Movie movie)
	{
		try
		{
			String mobj = new ObjectMapper().writeValueAsString(movie);
			return mobj;
		}
		catch(Exception eobj)
		{
			throw new RuntimeException();
		}
	}
	
	
	
}