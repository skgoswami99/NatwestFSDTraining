package com.stackroute.springboot.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.stackroute.springboot.model.User;

@Repository
public interface UserRepository extends MongoRepository<User,String> {
	
	//Query Methods

	//SQL
	//"select username, password from user_details where username =? and password = ?"
	
	@Query("{'username': {$in : [?0]},'password': {$in : [?1]}}")
	public User validateUser(String username, String password);
	
	@Query("{'username': ?0}")
	public User findByname(String name);
}