package com.Gopay.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;

@Entity
@Table
public class Wallet {
	
	@Id
	private String email;
	private Integer balance;
	@Transient
	private String	payeeEmail;

public Wallet() {
		super();
	}



public String getemail() {
	return email;
}
public void setemail(String useremail) {
	this.email = useremail;
}


public Integer getBalance() {
	return balance;
}
public void setBalance(Integer balance) {
	this.balance = balance;
}

public String getPayeeEmail() {
	return payeeEmail;
}



public void setPayeeEmail(String receiverEmail) {
	this.payeeEmail = receiverEmail;
}



@Override
public String toString() {
	return "Wallet [email=" + email + ", balance=" + balance + ", receiverEmail=" + payeeEmail + "]";
}




}
