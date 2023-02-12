package com.java.eight.datetime;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;
import java.time.temporal.ChronoUnit;
import java.util.Locale;

public class DateTimeFunctions {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

//		formatter();
		
//		modifyDateTime();
		dateDiff();
		
	}
	
	
	public static void formatter()
	{
		
		LocalTime localTime = LocalTime.of(15,30,30);
		
//		System.out.println(localTime);
//		
		
		DateTimeFormatter dtformatter = DateTimeFormatter.ofLocalizedTime(FormatStyle.LONG)
				.withLocale(Locale.JAPAN);
		
//		System.out.println(dtformatter);

//		defined Date formatter
		DateTimeFormatter mydtformatter = DateTimeFormatter.ofPattern("MMM dd, yyyy -- HH:mm");
	
//		Take Data in a string variable
		String mydt ="Dec 05, 2022 -- 15:17";
		
//		Parsing of validating the structure of data
		LocalDateTime localdateTime = LocalDateTime.parse(mydt, mydtformatter);

//		LocalDateTime localdateTime = LocalDateTime.parse(LocalDateTime.now(), mydtformatter);
		
		
//		Extracting the value based upon formatter
		String strDate = mydtformatter.format(localdateTime);

//		Displaying
		System.out.println(strDate);
		
	}
	
	
	
	public static void modifyDateTime()
	{
		
		LocalDate mydate = LocalDate.now();
		
		
		System.out.println("Current Date  "+mydate);
		
		
		System.out.println("Year After current Date "+mydate.plus(1,ChronoUnit.YEARS));
		System.out.println("Year After current Date "+mydate.plusYears(3));
		
		System.out.println("3 months After current Date "+mydate.plus(3,ChronoUnit.MONTHS));
		System.out.println("20 Days After current Date "+mydate.plus(20,ChronoUnit.DAYS));
		
	}
	
	
	public static void dateDiff()
	{
		ZoneId zone1 = ZoneId.of("Europe/London");
		ZoneId zone2 = ZoneId.of("Asia/Calcutta");
		
		System.out.println(zone1.getRules());
		System.out.println(zone2.getRules());
		
		System.out.println(LocalTime.now(zone1));
		System.out.println(LocalTime.now(zone2));
		
		System.out.println(ChronoUnit.HOURS.between(LocalTime.now(zone1), LocalTime.now(zone2)));
	}
	
	
	
	
	
}