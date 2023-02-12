package com.nat.xml;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{

    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );

        ApplicationContext appctx = new ClassPathXmlApplicationContext("beans.xml");

        Address add1 = appctx.getBean("addObj1",Address.class);
        Address add2 = appctx.getBean("addObj2",Address.class);
        Address add3 = appctx.getBean("addObj3",Address.class);
        Address add4 = appctx.getBean("addObj4",Address.class);

//        System.out.println(add1);
//        System.out.println(add2);
//        System.out.println(add3);
//        System.out.println(add4);

        Employee emp1 = appctx.getBean("empObj1",Employee.class);
        Employee emp2 = appctx.getBean("empObj2",Employee.class);

        System.out.println(emp1);
        System.out.println(emp2);
//        System.out.println(emp1.getEmpAdd().getAddId());
//        System.out.println(emp1.getEmpAdd().getCity());











//        Employee eObj1 = new Employee();

//        Address add2 = new Address();
//        Address add1 = new Address(1,"123 Street1","Pune","India");

//        Employee eObj2 = new Employee(1001,"Tim","tim@yahoo.com",
//                "234567", add1);
    }
}
