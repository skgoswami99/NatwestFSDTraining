package com.nat.ms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy
public class MovieMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(MovieMsApplication.class, args);
	}

}
