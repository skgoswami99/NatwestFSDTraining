package MapDemo;

import java.util.HashMap;
import java.util.Map.Entry;

import DataModel.Employee;

public class JCMDemo2 {

    HashMap<Integer, Employee> productDetails = new HashMap<Integer, Employee>();

    public void addProdDetails() {
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

        productDetails.put(empObj1.getEmpId(), empObj1);
        productDetails.put(empObj2.getEmpId(), empObj2);
        productDetails.put(empObj3.getEmpId(), empObj3);
        productDetails.put(empObj3.getEmpId(), empObj3);

    }

    public void dataRemove(int id) {
        productDetails.remove(id);

    }

    public void rtrvProdDetails() {

        for (Entry pentry : productDetails.entrySet()) {
            System.out.println(pentry.getKey() + "    " + pentry.getValue());
        }
    }

    public static void main(String[] args) {
        JCMDemo2 jcmObj = new JCMDemo2();

        jcmObj.addProdDetails();
        jcmObj.dataRemove(1);
        jcmObj.rtrvProdDetails();
    }
}
