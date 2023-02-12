package ListDemo;

import java.util.*;
// import java.util.Iterator;
// import java.util.ListIterator;

public class JCLDemo3 {
    // Generic Collection
    ArrayList<String> empName = new ArrayList<String>();

    public void empDataAccept() {

        empName.add("Tim");

        empName.add("Rim");

        empName.add("Jim");
        empName.add("Jim");
        empName.add("Jim");
        empName.add("Jim");
        empName.add(null);
        empName.add(null);
        empName.add(null);
        empName.add(null);
        empName.add(2, "Kim");

        empName.remove(5);

        empName.add(2, "Kim");

        // List allows duplicate values
        // List arrange data in insertion order
        // List also allows null values of as many numbers

    }

    public void empDisplay() {

        ListIterator empitr = empName.listIterator();

        // while (empitr.hasNext()) {
        // System.out.println(empitr.next());
        // }

        // while (empitr.hasPrevious()) {
        // System.out.println(empitr.previous());
        // }

        // for (String ename : empName) {
        // System.out.println(ename);
        // }

        empName.forEach(System.out::println);

        empName.forEach((emp) -> {

            System.out.println(emp);

        });

    }

    public static void main(String[] args) {

        JCLDemo3 jclObj = new JCLDemo3();
        jclObj.empDataAccept();
        jclObj.empDisplay();

    }
}