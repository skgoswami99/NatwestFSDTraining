package com.nat.msc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ReadMovieAndUserDataRtmsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReadMovieAndUserDataRtmsApplication.class, args);
	}

}
