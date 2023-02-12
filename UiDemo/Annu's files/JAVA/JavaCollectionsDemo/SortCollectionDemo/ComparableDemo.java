package SortCollectionDemo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.ListIterator;

public class ComparableDemo {

    public static void main(String[] args) {

        Student s1 = new Student("Alex", 88);

        Student s2 = new Student("Bob", 90);

        Student s3 = new Student("Joe", 78);

        ArrayList<Student> obj = new ArrayList<Student>();

        obj.add(s1);
        obj.add(s2);
        obj.add(s3);

        System.out.println("Student details are:");

        ListIterator li = obj.listIterator();

        while (li.hasNext()) {
            System.out.println(li.next());
        }

        Collections.sort(obj);

        System.out.println("Student details after sorting are:");

        ListIterator li2 = obj.listIterator();

        while (li2.hasNext()) {
            System.out.println(li2.next());
        }
    }
}
