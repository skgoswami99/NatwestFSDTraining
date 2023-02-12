package com.java.eight;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class sortCollectionData {

	public static void main(String[] args) {
	
		
		ArrayList<String> empName = new ArrayList<String>();
		
		empName.add("Tim");
		empName.add("Rim");
		empName.add("Jim");
		empName.add("Kim");
		empName.add("Xim");
		
		System.out.println("Before sorting Employees Name");
		System.out.println(empName);
	
		sortEmp(empName);
		
		System.out.println("After sorting Employees Name");
		System.out.println(empName);
		
	}
	
	
	public static void sortEmp(ArrayList<String> empName)
	{
		Collections.sort(empName, new Comparator<String>() {

			@Override
			public int compare(String o1, String o2) {
				// TODO Auto-generated method stub
				return o2.compareTo(o1);
			}}
		);
	}
	
	public static void sortData(ArrayList<String> empName)
	{
		Collections.sort(empName, new Comparator<String>() {

//			@Override
//			public int compare(Integer o1, Integer o2) {
//				// TODO Auto-generated method stub
//				return o2.compareTo(o1);
//			}

			@Override
			public int compare(String o1, String o2) {
				// TODO Auto-generated method stub
				return o2.compareTo(o1);
			}
			
		});
	}
}