package com.Gopay.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.Gopay.model.Wallet;


public interface IWalletRepo extends JpaRepository <Wallet, String>{

	@Query(value="select * from Wallet w where w.email like :emailParam", nativeQuery=true)
	Wallet findByEmail(@Param("emailParam") String email);
}
