package com.Gopay.service;

import com.Gopay.model.Customer;
import com.Gopay.model.Wallet;

import Exceptions.ResourceNotFound;

public interface IWalletService {
	
	public Integer getBalancebyEmail (String email) throws ResourceNotFound;
	
	public Wallet AddBalance (Wallet Wobj) throws ResourceNotFound;
	
	public Wallet DebitBalance (Wallet Wobj) throws ResourceNotFound;
	
	public Wallet AddUser (Customer Cobj);
	
	public Wallet DebitBalanceontransfer (Wallet Wobj) throws ResourceNotFound;

}
