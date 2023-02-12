package com.stackroute.newz.zuul.filter;


import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;

/*
 * Implement zuul logging filter by extending zuul filter
 */
@Component
public class LoggerFilter extends ZuulFilter{

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Override
	public boolean shouldFilter() {
		return true;
	}

	@Override
	public Object run() throws ZuulException {
		//getting the current HTTP request that is to be handle  
		HttpServletRequest request=RequestContext.getCurrentContext().getRequest();  
		//prints the detail of the requestin the log  
		logger.info("request -> {} request uri-> {}", request, request.getRequestURI());  
		return null;  
	}

	@Override
	public String filterType() {
		return "pre";
	}

	@Override
	public int filterOrder() {
		// TODO Auto-generated method stub
		return 1;
	}

	
}
