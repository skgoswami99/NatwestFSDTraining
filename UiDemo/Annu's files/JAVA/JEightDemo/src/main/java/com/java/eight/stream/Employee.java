package com.java.eight.stream;

public class Employee 
{
	
	private String empName;
	private int empAge;
	private double empSal;
	
		
	public Employee(String empName, int empAge, double empSal) {
		super();
		this.empName = empName;
		this.empAge = empAge;
		this.empSal = empSal;
	}
	
	
	public String getEmpName() {
		return empName;
	}
	public void setEmpName(String empName) {
		this.empName = empName;
	}
	public int getEmpAge() {
		return empAge;
	}
	public void setEmpAge(int empAge) {
		this.empAge = empAge;
	}
	public double getEmpSal() {
		return empSal;
	}
	public void setEmpSal(double empSal) {
		this.empSal = empSal;
	}

	@Override
	public String toString() {
		return "Employee [empName=" + empName + ", empAge=" + empAge + ", empSal=" + empSal + "]";
	}
}