package BasicDemos;

import java.util.Scanner;

public class JArrayDemo2 {

    String[] name = new String[3];
    Scanner sin = new Scanner(System.in);

    public void acceptstdDetails() {

        for (int i = 0; i < name.length; i++) {
            System.out.println("Enter the Name");
            name[i] = sin.next();
        }

        // System.out.println("Enter the Name");
        // name[1] = sin.next();

        // System.out.println("Enter the Name");
        // name[2] = sin.next();

        // String choice="Y";
        // int count=0;

        // do{
        // System.out.println("Enter the Name");
        // name[i] = sin.next();
        // }

    }

    public void displaystdDetails() {

        for (int i = 0; i < name.length; i++) {

            System.out.println("Name ::" + name[i]);
        }

        // Advance for loop

        for (String sname : name) {
            System.out.println(sname);
        }

        // System.out.println("Name ::" + name[1]);
        // System.out.println("Name ::" + name[2]);
    }
}
