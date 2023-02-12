package com.natwest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

import com.natwest.filter.MyJwtFilter;

@SpringBootApplication
@EnableDiscoveryClient
public class AuthApplication {
	
	@Bean
	public FilterRegistrationBean jwtFilter()
	{
		FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
		filterRegistrationBean.setFilter(new MyJwtFilter());
		filterRegistrationBean.addUrlPatterns("/isAuthenticated");
		return filterRegistrationBean;
	}

	public static void main(String[] args) {
		SpringApplication.run(AuthApplication.class, args);
	}

}
