package com.java.eight.sfi;

import java.util.Date;

public class SupplierFunctionTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		Supplier<String> helloStrSupplier = () -> new String("Hello");
		
		String helloStr = helloStrSupplier.get();
		
		System.out.println("String provided by helloStr is "+helloStr);
		
		
//		Lambda Expression
//		Supplier<String> emptyStr = () -> new String();
		
//		Method Reference
		Supplier<String> emptyStr = String::new;
		
		String emptystr = emptyStr.get();
		
		System.out.println("String provided by helloStr is "+emptystr);
		
		
//		Lambda Expression
		Supplier<Date> dateSupp = () -> getsysDate();
		
		Date datestr = dateSupp.get();
		
		System.out.println("Date of System is "+datestr);
		
		
//		Method Reference
		Supplier<Date> dateSupp1 = SupplierFunctionTest::getsysDate;
		
		Date datestr1 = dateSupp1.get();
		
		System.out.println("Date of System is "+datestr1);
		
		
	}
	
//	method defined
	public static Date getsysDate()
	{
		return new Date();
	}
}
