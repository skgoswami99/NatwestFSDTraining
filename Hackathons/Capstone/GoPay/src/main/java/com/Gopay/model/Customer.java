package com.Gopay.model;





public class Customer {
	
	private String email;
	private Integer balance;
	
	
	public Customer() {
		super();
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Integer getBalance() {
		return balance;
	}
	public void setBalance(Integer balance) {
		this.balance = balance;
	}
	@Override
	public String toString() {
		return "Customer [email=" + email + ", balance=" + balance + "]";
	}
	

}
