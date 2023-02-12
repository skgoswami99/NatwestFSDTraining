package com.natwest;

import com.natwest.Config.AppConfig;
import com.natwest.Model.Address;
import com.natwest.Model.Employee;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        AnnotationConfigApplicationContext appctx = new AnnotationConfigApplicationContext(AppConfig.class);

        Address add1 = appctx.getBean("addobj",Address.class);
        add1.setAddId(101);
        add1.setStreetNo("123 street 123");
        add1.setCity("pune");
        add1.setCountry("India");

        Employee Emp1 = appctx.getBean("empobj",Employee.class);
        Emp1.setEmpId(101);
        Emp1.setEmpName("TIM");
        Emp1.setEmpEmail("Tim@gmail.com");
        Emp1.setEmpContact("34324834");
        Emp1.setEmpAdd(add1);

        Employee Emp2 = appctx.getBean("empobj",Employee.class);
        Emp2.setEmpId(102);
        Emp2.setEmpName("RIM");
        Emp2.setEmpEmail("Rim@gmail.com");
        Emp2.setEmpContact("34324834");
        Emp2.setEmpAdd(add1);

        System.out.println(add1);
        System.out.println(Emp1);
        System.out.println(Emp2);

    }
}
