package com.stackroute.spring.mvc.orm.config;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class WebInitializerConfig extends 	AbstractAnnotationConfigDispatcherServletInitializer 
{
    @Override
    protected Class<?>[] getRootConfigClasses() 
    {    
        return new Class<?>[] { ApplicationConfig.class };
    }

    
    @Override
    protected Class<?>[] getServletConfigClasses() 
    {    
        return new Class<?>[] { WebMVCConfig.class };
    }

    @Override
    protected String[] getServletMappings() 
    {
        return new String[] { "/" };
    }
}