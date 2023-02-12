package com.natwest;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {

    public static void main(String[] args) {
        ApplicationContext appctx = new ClassPathXmlApplicationContext("beans.xml");

        Address add1= appctx.getBean("addObj1", Address.class );
        System.out.println(add1.getAddId() + "\n" + add1.getStreetNo());
        Employee emp1 = appctx.getBean("empObj1", Employee.class);
        System.out.println(emp1);
    }
}
