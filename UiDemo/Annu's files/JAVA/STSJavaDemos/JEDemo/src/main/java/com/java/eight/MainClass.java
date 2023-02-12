package com.java.eight;

public class MainClass
{

	public static void main(String[] args) {
	
		System.out.println(
				
				changeCaseMain("Hello World !!!", new ICCase() {

					@Override
					public String changeCase(String str) {
						return str.toLowerCase() + " " +
						str.toUpperCase();
					}
				})
				
				);
		
		System.out.println(
				changeCase2("Welcome-to-geeksforgeeks", new ICCase() {

					@Override
					public String changeCase(String str) {
						// TODO Auto-generated method stub
						return str.toUpperCase() + "  " +
								str.substring(10,16);
					}

					
					
					
				})
				);
	}
	
	public static String changeCaseMain(String str, ICCase icc)
	{
		return icc.changeCase(str);
	}
	
	public static String changeCase2(String str, ICCase abc)
	{
		return abc.changeCase(str);
	}
}