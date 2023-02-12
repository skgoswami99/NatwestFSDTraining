package com.natwest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import com.natwest.filter.MyJwtFilter;

@SpringBootApplication
@EnableDiscoveryClient
public class AuthApplication {
	
	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate ();
	}
	

	public static void main(String[] args) {
		SpringApplication.run(AuthApplication.class, args);
	}

}
