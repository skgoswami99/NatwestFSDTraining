package com.stackroute.newz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

/*
 * The @SpringBootApplication annotation is equivalent to using @Configuration, @EnableAutoConfiguration 
 * and @ComponentScan with their default attributes
 */
@SpringBootApplication
public class NewzApplication {

	/*
	 * 
	 * You need to run SpringApplication.run, because this method start whole spring
	 * framework. Code below integrates your main() with SpringBoot.
	 */
	
//	@Bean
//    public RestTemplate restTemplate(RestTemplateBuilder builder) {
//        return builder.build();
//    }

	public static void main(String[] args) {
		SpringApplication.run(NewzApplication.class, args);
	}

}
