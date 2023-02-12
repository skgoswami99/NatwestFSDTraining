package com.nat.ms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.nat.ms.model.User;

@Repository
public interface IUserRepository extends JpaRepository<User, Integer> 
{
	
	List<User> findByusername(String uname);
	
	
	@Query(value="select * from User u where u.userpass like %:param1%", nativeQuery=true)
	List<User> findUsersByKeyword(@Param("param1") String keyword);
	
	
//	List<User> findByNameAndPass(String uname,String upass);
	
}