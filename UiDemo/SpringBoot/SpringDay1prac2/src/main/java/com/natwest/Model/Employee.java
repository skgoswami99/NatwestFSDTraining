package com.natwest.Model;

public class Employee {

    private int empId;
    private String empName;
    private String empEmail;
    private String empContact;
    private Address empAdd;

    public Employee(int empId, String empName, String empEmail, String empContact, Address empAdd) {
        this.empId = empId;
        this.empName = empName;
        this.empEmail = empEmail;
        this.empContact = empContact;
        this.empAdd = empAdd;
    }

    public Employee() {

    }

    public int getEmpId() {
        return empId;
    }

    public void setEmpId(int empId) {
        this.empId = empId;
    }

    public String getEmpName() {
        return empName;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    public String getEmpEmail() {
        return empEmail;
    }

    public void setEmpEmail(String empEmail) {
        this.empEmail = empEmail;
    }

    public String getEmpContact() {
        return empContact;
    }

    public void setEmpContact(String empContact) {
        this.empContact = empContact;
    }

    public Address getEmpAdd() {
        return empAdd;
    }

    public void setEmpAdd(Address empAdd) {
        this.empAdd = empAdd;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "empId=" + empId +
                ", empName='" + empName + '\'' +
                ", empEmail='" + empEmail + '\'' +
                ", empContact='" + empContact + '\'' +
                ", empAdd=" + empAdd +
                '}';
    }
}
