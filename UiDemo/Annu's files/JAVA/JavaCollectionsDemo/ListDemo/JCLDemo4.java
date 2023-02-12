package ListDemo;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.ListIterator;

public class JCLDemo4 {

    ArrayList<String> newEmpName = new ArrayList<String>();

    // Generic Collection
    LinkedList<String> empName = new LinkedList<String>();

    public void empDataAccept() {

        newEmpName.add("emp1");
        newEmpName.add("emp2");
        newEmpName.add("emp3");
        newEmpName.add("emp4");

        empName.add("Tim");

        empName.add("Rim");

        empName.add("Jim");
        empName.add("");
        empName.add("Jim");
        empName.add("Jim");
        empName.add("Jim");
        empName.add(null);
        empName.add(null);
        empName.add(null);
        empName.add(null);
        empName.add(2, "Kim");

        empName.remove(5);

        empName.addFirst("Name1");

        empName.addAll(newEmpName);

        empName.addLast("Nameend");

        System.out.println(empName.get(3));

    }

    public void empDisplay() {

        // ListIterator empitr = empName.listIterator();

        // while (empitr.hasNext()) {
        // System.out.println(empitr.next());
        // }

        // while (empitr.hasPrevious()) {
        // System.out.println(empitr.previous());
        // }

        // for (String ename : empName) {
        // System.out.println(ename);
        // }

        if (!empName.contains(null)) {
            empName.forEach(System.out::println);
        }

        if (empName.size() > 20) {
            empName.forEach(System.out::println);
        }

        if (!empName.isEmpty()) {
            empName.forEach(System.out::println);
        }
        // empName.forEach((emp) -> {

        // System.out.println(emp);

        // });

    }

    public static void main(String[] args) {

        JCLDemo4 jclObj = new JCLDemo4();

        jclObj.empDataAccept();
        jclObj.empDisplay();
    }

}
