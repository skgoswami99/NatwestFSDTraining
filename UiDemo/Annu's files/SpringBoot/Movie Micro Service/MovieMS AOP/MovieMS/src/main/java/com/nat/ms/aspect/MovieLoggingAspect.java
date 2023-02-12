package com.nat.ms.aspect;

import java.time.LocalDateTime;
import java.util.Date;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.nat.ms.exception.MovieAlreadyExistsException;
import com.nat.ms.model.Movie;

@Aspect
@Component
public class MovieLoggingAspect 
{
	
	private Logger logger = LoggerFactory.getLogger(MovieLoggingAspect.class);
	
	
	@Before(value="execution(* com.nat.ms.controller.MovieController.*(..)) and args(mObj)")
	public void beforeAdviceAddMethod(JoinPoint joinpoint, Movie mObj)
	{
		logger.info("Inside Before Add Data Advice ....");
		logger.info("Target object Method --> "+ joinpoint.getSignature().getName());
		logger.info("Creating Movie Object --> "+ mObj);
	}
	
	
	@AfterReturning(value="execution(* com.nat.ms.controller.MovieController.*(..)) and args(mObj))")
	public void afterReturningAdviceAddMethod(JoinPoint joinpoint, Movie mObj)
	{
		logger.info("Inside Before Add Data Advice ....");
		logger.info("Target object Method --> "+ joinpoint.getSignature().getName());
		logger.info("Method Completed execution successfully --> ");
	}
	
	@AfterThrowing(value="execution(* com.nat.ms.controller.MovieController.*(..))",throwing="maee")
	public void afterThrowigAdviceAddMethod(JoinPoint joinpoint, MovieAlreadyExistsException maee)
	{
		logger.info("Inside Exception Advice ....");
		logger.info("Exception Target object Method --> "+ joinpoint.getSignature().getName());
		logger.info("Exception Thrown --> "+maee.getMessage());
	}
	
	@Before(value="execution(* com.nat.ms.controller.MovieController.*(..))")
	public void beforeAdviceGetMethod(JoinPoint joinpoint)
	{
		logger.info("Inside Before Get Data Advice ....");
		logger.info("Target object Method --> "+ joinpoint.getSignature().getName());
		logger.info("Date Time "+  LocalDateTime.now());
	}	
}
