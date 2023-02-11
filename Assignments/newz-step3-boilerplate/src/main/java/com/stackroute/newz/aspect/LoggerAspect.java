package com.stackroute.newz.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

/* Annotate this class with @Aspect and @Component */
@Aspect
@Component
public class LoggerAspect {

	/*
	 * Write loggers for each of the methods of controller, any particular method
	 * will have all the four aspectJ annotation
	 * (@Before, @After, @AfterReturning, @AfterThrowing).
	 */
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Before(value="execution(* com.stackroute.newz.controller..*(..)))")
	  public void beforeAllMethods(JoinPoint joinPoint) throws Throwable 
	  {
	    joinPoint.getSignature().getName();
	    logger.info("{} returned with value {}", joinPoint);
	  }
	
	@After("execution(* com.stackroute.newz.controller..*(..)))")
	  public void afterAllMethods(JoinPoint joinPoint) throws Throwable 
	  {
	    joinPoint.getSignature().getName();
	    logger.info("after execution of {}", joinPoint);
	  }
	
	@AfterReturning(value="execution(* com.stackroute.newz.controller..*(..)))", returning = "result")
	  public void afterReturningAllMethods(JoinPoint joinPoint, Object result) throws Throwable 
	  {
	    joinPoint.getSignature().getName();
	    logger.info("{} returned with value {}", joinPoint, result);
	  }
	
	@AfterThrowing("execution(* com.stackroute.newz.controller..*(..)))")
	  public void afterThrowingAllMethods(JoinPoint joinPoint) throws Throwable 
	  {
	    joinPoint.getSignature().getName();
	  }
}
