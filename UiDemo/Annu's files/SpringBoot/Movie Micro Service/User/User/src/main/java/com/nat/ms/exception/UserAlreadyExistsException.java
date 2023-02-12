package com.nat.ms.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code=HttpStatus.CONFLICT, reason="User details already exists !!!")
public class UserAlreadyExistsException extends Exception 
{

}
