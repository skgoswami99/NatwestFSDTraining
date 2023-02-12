package com.java.eight.stream;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamOperations {

	public static void main(String[] args) {

		List<Employee> empDetails = Arrays.asList(
				
				new Employee("Tim",23,345678.33),
				new Employee("Rim",21,445678.33),
				new Employee("Jim",22,545678.33),
				new Employee("Kim",23,365678.33),
				new Employee("Xim",24,375678.33));
				
//		Stream API has two types of methods
		
//		Intermediate: Which helps to implement intermediate operations
//		Terminal: Which helps to implement terminal operations
		
		
//		empDetails.forEach(System.out::println);
//		
		
//		List<Employee> LimitData = empDetails.stream()
//				.limit(3)
//				.collect(Collectors.toList());
//				
//
//		LimitData.forEach(System.out::println);


		
		List<Employee> filterData = empDetails.stream()
				.filter((Employee emp) -> emp.getEmpAge() > 22)
				.collect(Collectors.toList());
				

//		filterData.forEach(System.out::println);
		
		
//		List<String> empName = empDetails.stream()
//				.map((emp) -> emp.getEmpName())
//				.collect(Collectors.toList());
//				
//
//		empName.forEach(System.out::println);
		
		
		List<Employee> filterdata = empDetails.stream()
				.skip(2)
				.collect(Collectors.toList());
				

		filterdata.forEach(System.out::println);
		
		
//		double totSal = empDetails.stream()
//				.map((emp) -> emp.getEmpSal())
//				.reduce(0.0,(a,b)-> a+b);
//				
//
//		System.out.println(totSal);
		
	}
}


//total += sal;

