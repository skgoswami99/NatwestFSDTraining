package com.boot.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.boot.model.Note;

@Repository
public interface INoteRepository extends MongoRepository<Note, String> 
{
	
}