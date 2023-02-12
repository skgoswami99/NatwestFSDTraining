package SetDemo;

import java.util.HashSet;

public class JCSDemo1 {

    HashSet<String> empName = new HashSet<String>();

    public void empDataAccept() {

        empName.add("Tim");
        empName.add("Rim");
        empName.add("Jim");
        empName.add("Jim");
        empName.add("Jim");
        empName.add("Jim");

    }

    public void empDisplay() {
        for (String ename : empName) {
            System.out.println(ename);
        }
    }

    public static void main(String[] args) {

        JCSDemo1 jcsObj = new JCSDemo1();

        jcsObj.empDataAccept();
        jcsObj.empDisplay();
    }
}
