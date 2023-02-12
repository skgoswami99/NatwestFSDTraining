package com.nat.gatw.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayRoutingConfig {

//	http://localhost:8756/api/v2/getAllMovies
	
//	@Bean
//	public RouteLocator configureRoute(RouteLocatorBuilder builder)
//	{
//		return builder.routes()
//				.route("MovieRouteID",r -> r.path("/api/v2/**").uri("http://localhost:8082"))
//				.route("UserRouteID",r -> r.path("/api/v1/**").uri("lb://user-service"))
//				.build();
//	}
}