package BasicDemos;

import java.util.Scanner;

public class JavaDemo4 {

    int num1 = 10;
    int num2 = 5;

    int result = 0;

    int choice;

    Scanner sin = new Scanner(System.in);

    public void menu() {
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

        JavaDemo4 obj = new JavaDemo4();

        String ans = "N";

        int i = 0;
        do {
            obj.menu();
            obj.acceptData();

            switch (obj.choice) {
                case 1:
                    obj.add();
                    break;
                case 2:
                    obj.sub();
                    break;
                case 3:
                    obj.mul();
                    break;
                case 4:
                    obj.div();
                    break;
                default:
                    System.out.println("Invalid choice!!");
                    break;
            }

            System.out.println("Do you wish to continue (Y/N)");
            ans = obj.sin.next();

        } while (ans.equals("Y"));
    }
}
