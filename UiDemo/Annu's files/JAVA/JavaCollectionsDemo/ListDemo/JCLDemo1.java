package ListDemo;

import java.util.*;

public class JCLDemo1 {

    // Create and instatiate an Object of ArrayList class
    ArrayList empDetails = new ArrayList();

    public void empData() {

        // Add the data inside the arrayList object
        empDetails.add("Tim");
        empDetails.add(23);
        empDetails.add("2345678");
        empDetails.add(43256.77);
    }

    public void empDisplay() {
        for (Object emp : empDetails) {
            System.out.println(emp);
        }

    }

    public static void main(String[] args) {

        JCLDemo1 jclObj = new JCLDemo1();
        jclObj.empData();
        jclObj.empDisplay();
    }

}
