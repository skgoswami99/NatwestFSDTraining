package com.boot.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code=HttpStatus.CONFLICT,reason="Note already Exists Exceptions ......")
public class NotealreadyExistsException extends Exception {

}
