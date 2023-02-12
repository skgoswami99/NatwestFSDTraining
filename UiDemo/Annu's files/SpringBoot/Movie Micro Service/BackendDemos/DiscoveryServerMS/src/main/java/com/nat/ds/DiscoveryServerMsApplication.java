package com.nat.ds;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class DiscoveryServerMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(DiscoveryServerMsApplication.class, args);
	}

}
