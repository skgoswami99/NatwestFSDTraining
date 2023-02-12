package com.nat.ms.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code=HttpStatus.NOT_FOUND, reason="User details does not exists !!!")
public class UserNotFoundException extends Exception 
{
	
}
