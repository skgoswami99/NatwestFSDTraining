package com.Gopay.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Gopay.model.Customer;
import com.Gopay.model.Wallet;
import com.Gopay.service.IWalletService;

import Exceptions.ResourceNotFound;

@RestController
@CrossOrigin("*")
@RequestMapping("auth")
public class WalletController {

	@Autowired
	private IWalletService Walletservice;

	
	@GetMapping("/balance/{email}")
	public ResponseEntity<?> getBalance (@PathVariable String email) throws ResourceNotFound{
		Integer balance=this.Walletservice.getBalancebyEmail(email)
;				return new ResponseEntity(balance, HttpStatus.OK);	
	}
	
	@PostMapping("/addbal")
	public ResponseEntity<?> addBalance (@RequestBody Wallet Wobj) throws ResourceNotFound{
		Wallet wallet= this.Walletservice.AddBalance(Wobj);
		return new ResponseEntity(wallet, HttpStatus.OK);	
	}
	
	@PostMapping("/debitbal")
	public ResponseEntity<?> debitBalance (@RequestBody Wallet Wobj) throws ResourceNotFound{
		Wallet wallet= this.Walletservice.DebitBalance(Wobj);
		return new ResponseEntity(wallet, HttpStatus.OK);	
	}
	
	@PostMapping("/transfer")
	public ResponseEntity<?> debitBalanceontransfer (@RequestBody Wallet Wobj) throws ResourceNotFound{
		Wallet wallet= this.Walletservice.DebitBalanceontransfer(Wobj);
		return new ResponseEntity(wallet, HttpStatus.OK);	
	}
	
	@PostMapping("/adduser")
	public ResponseEntity<?> addBalance (@RequestBody Customer Cobj){
		Wallet wallet = this.Walletservice.AddUser(Cobj);
		return new ResponseEntity(wallet, HttpStatus.OK);	
		
	}
	
}


