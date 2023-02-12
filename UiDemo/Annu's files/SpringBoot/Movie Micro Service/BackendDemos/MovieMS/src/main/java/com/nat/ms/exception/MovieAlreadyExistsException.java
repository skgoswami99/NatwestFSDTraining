package com.nat.ms.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code=HttpStatus.CONFLICT, reason="Movie details already exists !!!")
public class MovieAlreadyExistsException extends Exception {

}
