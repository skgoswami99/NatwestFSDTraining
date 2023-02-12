package com.java.eight;

import java.util.function.Function;

public class TaskImpl {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		System.out.println(
				
				strSubString("Hello World",5, new ITask() {

					@Override
					public String strTask(String str, Integer i) {
						// TODO Auto-generated method stub
						return str.substring(i);
					}
				})
				);
	}

	public static String strSubString(String str, int i,ITask itObj)
	{
		return itObj.strTask(str, i);
	}
}
