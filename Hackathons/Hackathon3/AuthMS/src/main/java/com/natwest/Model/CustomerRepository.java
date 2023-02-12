package com.natwest.Model;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface CustomerRepository extends JpaRepository<Customer, String>{

	@Query(value="select * from Customer Cust where Cust.email like %:emailParam%", nativeQuery=true)
	Optional<Customer> findByEmail(@Param("emailParam") String email);
	
	@Query(value="select * from Customer Cust where Cust.email like %:emailParam% and Cust.password like %:passParam%", nativeQuery=true)
	public Customer validateCustomer(@Param("emailParam") String email, @Param("passParam")String password);
}
