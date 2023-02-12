package OOPDemos2;

import java.util.Scanner;

public class Employee {

    protected int empId;
    protected String empName;
    protected int empAge;

    // Salary
    // hourlyWages

    // Employee Has-A address -- taking entity reference for employee as well
    protected Address empAddress;
    Scanner sin;

    // default constructor
    public Employee() {
        System.out.println("constructor of Employee Class");
        empAddress = new Address();
        sin = new Scanner(System.in);
    }

    // Constructor Overloading or Constructor with Parameter
    public Employee(int empId) {
        System.out.println("constructor with param");

        // this is the reference of same class which is Employee class
        this.empId = empid;
       
    }

    public void accept() {

        System.out.println("Enter Employee Id");
        empId = sin.nextInt();

        System.out.println("Enter Employee Name");
        empName = sin.next();

        System.out.println("Enter Employee Age");
        empAge = sin.nextInt();

        System.out.println("Enter Employee Streetno");
        empAddress.StreetNo = sin.next();

        System.out.println("Enter Employee City");
        empAddress.City = sin.next();

        System.out.println("Enter Employee Country");
        empAddress.Country = sin.next();

        System.out.println("Enter Employee Zip Code");
        empAddress.ZipCode = sin.next();
    }

    public void display() {

        System.out.println("Employee Id " + empId);
        System.out.println("Employee Name " + empName);
        System.out.println("Employee Age " + empAge);
        System.out.println("Employee Streetno " + empAddress.StreetNo);
        System.out.println("Employee City " + empAddress.City);
        System.out.println("Employee Country " + empAddress.Country);
        System.out.println("Employee Zip Code " + empAddress.ZipCode);
    }

    // method without body is called as abstract method
    // public abstract void calcSalary();
}