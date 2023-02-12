package com.nat.config;

import com.nat.model.Address;
import com.nat.model.Employee;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import java.util.ArrayList;
import java.util.Arrays;


@Configuration
@ComponentScan("com.nat.model")
public class AppConfig
{

}