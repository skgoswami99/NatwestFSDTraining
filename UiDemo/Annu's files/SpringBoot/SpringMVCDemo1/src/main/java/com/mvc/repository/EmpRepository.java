package com.mvc.repository;

import com.mvc.model.Employee;

import java.util.ArrayList;
import java.util.List;

public class EmpRepository
{
    public List<Employee> empData;

    public EmpRepository()
    {
        this.empData = new ArrayList<>();
    }

    public List<Employee> getEmpDetails()
    {
        return empData;
    }

    public void addEmpData(Employee empObj)
    {
        this.empData.add(empObj);
    }

    public void deleteEmp(int empId)
    {
        this.empData.remove(empId);
    }
}
