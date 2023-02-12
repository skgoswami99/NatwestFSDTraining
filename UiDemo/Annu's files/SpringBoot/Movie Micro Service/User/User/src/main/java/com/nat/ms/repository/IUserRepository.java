package com.nat.ms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.nat.ms.model.User;

@Repository
public interface IUserRepository extends JpaRepository<User, Integer> 
{
	
//	@Query("Select u from User where u.username= :uname")
//	List<User> findByName(String uname);
	
//	List<User> findByNameAndPass(String uname,String upass);
	
}