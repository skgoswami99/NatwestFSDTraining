package com.natwest.Config;

import com.natwest.Model.Address;
import com.natwest.Model.Employee;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Scope;

public class AppConfig {

    @Bean ("addobj")
    @Scope ("prototype")
    public Address getadd() {
        return new Address();
    }

    @Bean ("empobj")
    @Scope ("prototype")
    public Employee getemp() {
        return new Employee();
    }
}
