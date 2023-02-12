package BasicDemos;

import java.util.Scanner;

public class JavaDemo2 {

    int num1 = 10;
    int num2 = 5;
    int result = 0;

    int choice;

    static int count;

    Scanner sin = new Scanner(System.in);

    public static void menu() {
        System.out.println("Enter 1 to add numbers ");
        System.out.println("Enter 2 to subtract numbers ");
        System.out.println("Enter 3 to multiply numbers ");
        System.out.println("Enter 4 to divide numbers ");
    }

    public void acceptData() {

        System.out.println("Enter first Number");
        num1 = sin.nextInt();

        System.out.println("Enter second Number");
        num2 = sin.nextInt();

        System.out.println("Enter you choice as per menu");
        choice = sin.nextInt();

    }

    // functionn to add the number

    // Function declaration and defination

    public void add() {

        result = num1 + num2;

        System.out.println("SUM  " + result);
    }

    public void sub() {

        result = num1 - num2;

        System.out.println("DIFF  " + result);
    }

    public void mul() {

        result = num1 * num2;

        System.out.println("PRODUCT  " + result);
    }

    public void div() {

        result = num1 / num2;

        System.out.println("DIV-QUOTIENT  " + result);
    }

    public static void main(String[] aa) {

        JavaDemo2 obj = new JavaDemo2();

        menu();
        obj.acceptData();

        if (obj.choice == 1) {
            obj.add();
        } else if (obj.choice == 2) {
            obj.sub();
        } else if (obj.choice == 3) {
            obj.mul();
        } else if (obj.choice == 4) {
            obj.div();
        } else {
            System.out.println("Invalid choice!!");
        }
    }
}