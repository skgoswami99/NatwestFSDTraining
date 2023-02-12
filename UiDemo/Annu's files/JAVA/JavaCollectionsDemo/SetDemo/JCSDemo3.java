package SetDemo;

import java.util.Iterator;
import java.util.TreeSet;

public class JCSDemo3 {

    TreeSet<String> empName = new TreeSet<String>();

    public void empDataAccept() {

        empName.add("Tim");
        empName.add("Jim");
        empName.add("Rim");
        empName.add("Jim");

        empName.add("Jim");
        empName.add("Jim");

    }

    public void empDisplay() {

        // By Default Ascending Order
        for (String ename : empName) {
            System.out.println(ename);
        }

        // Descending Order
        Iterator empItr = empName.descendingIterator();

        while (empItr.hasNext()) {
            System.out.println(empItr.next());
        }

        // empName.forEach(System.out::println);
    }

    public static void main(String[] args) {

        JCSDemo3 jcsObj = new JCSDemo3();
        jcsObj.empDataAccept();
        jcsObj.empDisplay();

    }
}
