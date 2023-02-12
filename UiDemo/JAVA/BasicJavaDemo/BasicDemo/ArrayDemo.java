package BasicDemo;

import java.util.Scanner;

public class ArrayDemo {

    String[] name = new String[3];

    Scanner inp = new Scanner(System.in);
    

    public void acceptNames() {

        for (int i=0; i<3; i++ ){
        System.out.println("Enter your name");
        name[i] = inp.next();
        }

    }

    public void displayNames(){

        for (int i=0; i<name.length; i++)
        System.out.println("Name = " + name[i]);
    }


 public static void main() {
    
    ArrayDemo objArray = new ArrayDemo();

    objArray.acceptNames();
    objArray.displayNames();
    
}
}