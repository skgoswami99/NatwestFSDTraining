    package com.nat.config;

import com.nat.model.Address;
import com.nat.model.Employee;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Scope;

import java.util.ArrayList;
import java.util.Arrays;

public class AppConfig
{

    @Bean("addObj")
    @Scope("prototype")
    public Address getAddressObject()
    {
        return new Address();
    }
//
//    @Bean
//    public Employee getEmployeeObject1()
//    {
//        return new Employee();
//    }

    @Bean("addObj1")
    public Address getAddressObject1()
    {
        return new Address(101,"123 street 1","Noida","India");
    }

//    Factory method to get bean reference
    @Bean("addObj2")
    public Address getAddressObject2()
    {
        return new Address(102,"231 street 12","Bangalore","India");
    }

    @Bean("addObj3")
    public Address getAddressObject3()
    {
        return new Address(103,"345 street 11","Chennai","India");
    }


    @Bean
    public Employee getEmployeeObject1()
    {
//        ArrayList<Address> addada = new ArrayList<>();
//        addada.add(0, getAddressObject1());
//        addada.add(1, getAddressObject3());


        return new Employee(1,"Tim","tim@gmail.com","234567",
                new ArrayList<Address>(Arrays.asList(getAddressObject1(),getAddressObject3())));

    }
}