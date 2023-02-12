package ListDemo;

import java.util.ArrayList;

import DataModel.Employee;

public class JCLDemo2 {

    // Generic Collection
    ArrayList<String> empName = new ArrayList<String>();
    ArrayList<Integer> empAge = new ArrayList<Integer>();
    ArrayList<Float> empSal = new ArrayList<Float>();

    ArrayList<Employee> empDetails = new ArrayList<Employee>();

    public void empDataAccept() {

        // Creating multiple Employee objects for multiple records

        Employee empObj1 = new Employee();

        empObj1.setEmpId(1);
        empObj1.setEmpName("Tim");
        empObj1.setEmpAge(23);
        empObj1.setEmpSal(123.44f);

        Employee empObj2 = new Employee();

        empObj2.setEmpId(2);
        empObj2.setEmpName("Rim");
        empObj2.setEmpAge(22);
        empObj2.setEmpSal(133.44f);

        Employee empObj3 = new Employee();

        empObj3.setEmpId(3);
        empObj3.setEmpName("Kim");
        empObj3.setEmpAge(20);
        empObj3.setEmpSal(124.44f);

        // Adding the employees records with employee objects

        empDetails.add(empObj1);
        empDetails.add(empObj2);
        empDetails.add(empObj3);

        empName.add("Tim");
        empAge.add(23);
        empSal.add(23456.66f);

        empName.add("Rim");
        empAge.add(21);
        empSal.add(35456.66f);

        empName.add("Jim");
        empAge.add(22);
        empSal.add(44456.66f);

    }

    public void empDisplay() {
        // for (String ename : empName) {
        // System.out.println(ename);
        // }

        // for (Integer eage : empAge) {
        // System.out.println(eage);
        // }

        // for (Float esal : empSal) {
        // System.out.println(esal);
        // }

        for (Employee ee : empDetails) {
            System.out.println(ee);
        }

    }

    public static void main(String[] args) {

        JCLDemo2 jclObj = new JCLDemo2();
        jclObj.empDataAccept();
        jclObj.empDisplay();

    }
}