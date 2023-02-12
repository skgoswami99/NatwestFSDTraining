package com.java.eight.datetime;

import java.time.Clock;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;

public class JavaDateTimeDemo {

	public static void main(String[] args) 
	{
		
		Clock myclock = Clock.systemDefaultZone();
		
		long milis = myclock.millis();
		
		System.out.println(milis);
		
		Instant instant = myclock.instant();
		
		System.out.println(instant);

		LocalDateTime currentTime = LocalDateTime.now();
		System.out.println(currentTime);
		
		LocalDate localDate = currentTime.toLocalDate();
		System.out.println(localDate);
		
		System.out.println("YEAR "+currentTime.getYear());
		System.out.println("MONTH "+currentTime.getMonth());
		System.out.println("DaY "+currentTime.getDayOfMonth());
		System.out.println("HOUR "+currentTime.getHour());
		System.out.println("WEEK DAY "+currentTime.getDayOfWeek());
		
		System.out.println("Time Zone "+ZoneId.systemDefault());
	}
}
