package com.Gopay.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Gopay.model.Customer;
import com.Gopay.model.Wallet;
import com.Gopay.repository.IWalletRepo;

import Exceptions.ResourceNotFound;

@Service
public class WalletService implements IWalletService {
	
	@Autowired
	private IWalletRepo  Wrepo;
	
	@Override
	public Integer getBalancebyEmail(String email) throws ResourceNotFound {
	Wallet wobj  = 	this.Wrepo.findByEmail(email);
	
	if (wobj == null) {throw new ResourceNotFound();}
	
	Integer balance= wobj.getBalance();
		return balance;
	}

	@Override
	public Wallet AddBalance(Wallet Wobj) throws ResourceNotFound {
	Wallet existing = this.Wrepo.findByEmail(Wobj.getemail());
	
	if (existing == null) {throw new ResourceNotFound();}
	Wobj.setBalance(existing.getBalance()+Wobj.getBalance());
	Wallet wallet= this.Wrepo.save(Wobj);
		return wallet;
	}
	
	@Override
	public Wallet DebitBalance(Wallet Wobj) throws ResourceNotFound {
		Wallet existing = this.Wrepo.findByEmail(Wobj.getemail());
		
		if (existing == null) {throw new ResourceNotFound();}
		Wobj.setBalance(existing.getBalance() - Wobj.getBalance());
		Wallet wallet= this.Wrepo.save(Wobj);
		
			return wallet;
			
	}
	
	@Override
	public Wallet DebitBalanceontransfer(Wallet Wobj) throws ResourceNotFound {

		Wallet existing = this.Wrepo.findByEmail(Wobj.getemail());

		if (existing == null) {throw new ResourceNotFound();}
		
		Wallet payer = new Wallet();
		payer.setBalance(existing.getBalance() - Wobj.getBalance());
		payer.setemail(Wobj.getemail());
		Wallet wallet= this.Wrepo.save(payer);

		Wallet payee = new Wallet();

		Wallet existingpayee = this.Wrepo.findByEmail(Wobj.getPayeeEmail());

		if (existingpayee == null) {throw new ResourceNotFound();}

		payee.setemail(Wobj.getPayeeEmail());
		payee.setBalance(existingpayee.getBalance() + Wobj.getBalance());
		this.Wrepo.save(payee);

		return wallet;
	}
	
	@Override
	public Wallet AddUser (Customer Cobj) {
		Wallet existing = this.Wrepo.findByEmail(Cobj.getEmail());
//		System.out.println(Cobj.getEmail());
		Wallet w = new Wallet();
		Wallet wallet = null;
		if (existing == null) {
		w.setemail(Cobj.getEmail());
		w.setBalance(0);
		wallet = this.Wrepo.save(w);}
		return wallet;
		
	}

	

}
