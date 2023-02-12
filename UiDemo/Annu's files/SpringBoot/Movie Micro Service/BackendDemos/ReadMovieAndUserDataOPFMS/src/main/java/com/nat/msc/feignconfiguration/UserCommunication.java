package com.nat.msc.feignconfiguration;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import com.nat.msc.model.Movie;
import com.nat.msc.model.User;

@FeignClient(name="USER-SERVICE")
public interface UserCommunication 
{
	@GetMapping("/api/v1/getAllUsers")
	public List<User> getAllUsers();
}
