package com.stackroute.newz.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.stereotype.Component;


/* Annotate this class with @Aspect and @Component */


@Aspect
@Component
@Configuration
@EnableAspectJAutoProxy

public class LoggerAspect {

	private static final Logger logger = LoggerFactory.getLogger(LoggerAspect.class);

	@Bean
	public LoggerAspect log() {
		return new LoggerAspect();
	}

	/*
	 * Write loggers for each of the methods of NewsController, any particular method
	 * will have all the four aspectJ annotation
	 * (@Before, @After, @AfterReturning, @AfterThrowing).
	 */
	@Before("execution(* com.stackroute.newz.controller.*.*(..))")
	public void logBeforeReminder(JoinPoint jp){
		logger.info("Entering into "+jp.getSignature().getName());
	}
	
	@After("execution(* com.stackroute.newz.controller.*.*(..))")
	public void logAfterReminder(JoinPoint jp){
		logger.info("Exiting into "+jp.getSignature().getName());
	}
	
	@AfterReturning("execution(* com.stackroute.newz.controller.*.*(..))")
	public void logAfterReturnReminder(JoinPoint jp){
		logger.info("@AfterReturning into "+jp.getSignature().getName());
	}
	
	@AfterThrowing("execution(* com.stackroute.newz.controller.*.*(..))")
	public void logAfterThrowingReminder(JoinPoint jp){
		logger.info("@AfterThrowing into "+jp.getSignature().getName());
	}



}
