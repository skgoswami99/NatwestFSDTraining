package com.stackroute.newz;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.stackroute.newz.zuul.config.BeanConfiguration;
import com.stackroute.newz.zuul.filter.JwtFilter;

/*
 * The @SpringBootApplication annotation is equivalent to using @Configuration, @EnableAutoConfiguration 
 * and @ComponentScan with their default attributes
 * 
 * Add @EnableZuulProxy and @EnableEurekaClient
 * 
 */
@SpringBootApplication
@EnableZuulProxy
@EnableEurekaClient
public class NewzNetflixZuulApiGatwayApplication {
@Autowired
BeanConfiguration beanConfiguration;
	public static void main(String[] args) {
		SpringApplication.run(NewzNetflixZuulApiGatwayApplication.class, args);
	}

	/*
	 * Define the bean for Filter registration. Create a new FilterRegistrationBean
	 * object and use setFilter() method to set new instance of JwtFilter object.
	 * Also specifies the Url patterns for registration bean.
	 */

	@Bean
	public FilterRegistrationBean<JwtFilter> jwtFilter() {
		
		FilterRegistrationBean<JwtFilter> filterRegistrationBean = new FilterRegistrationBean<>();
		filterRegistrationBean.setFilter(new JwtFilter());
		filterRegistrationBean.addUrlPatterns(
				"/NewsService/api/v1/news/*", "/NewsSourceService/api/v1/newssource/*","/UserProfileService//api/v1/userprofile/{userId}");
		return filterRegistrationBean;
	}

}
