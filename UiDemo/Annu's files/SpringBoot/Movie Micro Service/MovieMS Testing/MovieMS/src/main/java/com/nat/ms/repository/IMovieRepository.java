package com.nat.ms.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.nat.ms.model.Movie;

@Repository
public interface IMovieRepository extends MongoRepository<Movie, String> 
{
	
}
