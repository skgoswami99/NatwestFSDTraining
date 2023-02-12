package com.infosys.db;

import java.util.Optional;

public class MainClass {

	public static void main(String[] args) 
	{
		EmployeeDAO empdObj = new EmployeeDAO();

		Optional<Employee> empDetails = empdObj.getEmployeeById();
		
		if(empDetails.isEmpty())
		{
			System.out.println("Employee Record Does NotExists ...");
		}
		else
		{
			System.out.println(empDetails.get());
		}
	}
}
