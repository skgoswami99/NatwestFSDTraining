package com.natwest.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code=HttpStatus.UNAUTHORIZED, reason= "Incorrect login Details")
public class CustomerNotFoundException extends Exception{

}
