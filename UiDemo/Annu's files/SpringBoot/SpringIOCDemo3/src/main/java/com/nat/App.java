package com.nat;

import com.nat.config.AppConfig;
import com.nat.model.Address;
import com.nat.model.Employee;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );

        AnnotationConfigApplicationContext acapctx= new AnnotationConfigApplicationContext(AppConfig.class);

        Employee eObj1 = acapctx.getBean(Employee.class);


        Address aObj1 = acapctx.getBean(Address.class);


        Address aObj2 = acapctx.getBean(Address.class);
//        Address aObj3 = acapctx.getBean("addObj3",Address.class);


//        By default the scope of object is singleton

        Address aObj4 = acapctx.getBean(Address.class);
        aObj4.setAddId(101);
        aObj4.setStreetNo("123 street 123");
        aObj4.setCity("pune");
        aObj4.setCountry("India");

        Address aObj5 = acapctx.getBean(Address.class);
        aObj5.setAddId(102);
        aObj5.setStreetNo("124 street 124");
        aObj5.setCity("Pune");
        aObj5.setCountry("India");

        System.out.println(eObj1);
        System.out.println(aObj1);
        System.out.println(aObj2);
//        System.out.println(aObj2);
//        System.out.println(aObj3);
    }
}
