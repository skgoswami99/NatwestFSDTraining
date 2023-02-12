package SetDemo;

import java.util.LinkedHashSet;

public class JCSDemo2 {

    LinkedHashSet<String> empName = new LinkedHashSet<String>();

    public void empDataAccept() {

        empName.add("Tim");
        empName.add("Jim");
        empName.add("Rim");
        empName.add("Jim");

        empName.add("Jim");
        empName.add("Jim");

    }

    public void empDisplay() {
        for (String ename : empName) {
            System.out.println(ename);
        }

        empName.forEach(System.out::println);
    }

    public static void main(String[] args) {

        JCSDemo2 jcsObj = new JCSDemo2();

        jcsObj.empDataAccept();
        jcsObj.empDisplay();
    }

}
