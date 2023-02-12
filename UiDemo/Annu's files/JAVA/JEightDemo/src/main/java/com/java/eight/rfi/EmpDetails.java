package com.java.eight.rfi;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

public class EmpDetails {

	public static void main(String[] args) {
	
		Predicate<Integer> empSalgrter = i -> i > 24444;
		
		ArrayList<Integer> empSal = new ArrayList<Integer>();

		empSal.add(22222);
		empSal.add(23333);
		empSal.add(24444);
		empSal.add(33333);
		empSal.add(44444);
		empSal.add(55555);
		
		
		List<Integer> finalOutput = filterSal(empSal,empSalgrter);
		
		finalOutput.forEach(System.out::println);
		
	}

	
	public static List<Integer> filterSal(List<Integer> lstData, Predicate<Integer> pObj)
	{
		ArrayList<Integer> empSalFiltered = new ArrayList<Integer>();
		
		for(Integer fdata:lstData)
		{
			if(pObj.test(fdata))
			{
				empSalFiltered.add(fdata);
			}
		}
		
		return empSalFiltered;
	}
}
