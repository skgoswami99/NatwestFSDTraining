package BasicDemo;

import java.util.Scanner;

public class JavaDemo2 {

    int num1;
    int num2;

    int result = 0;
    int choice;

    Scanner inp = new Scanner(System.in);

    public static void main(String[] args) {

        JavaDemo2 obj = new JavaDemo2();
       
        
        for (int i = 0; i < 4; i++) {
            obj.menu();
            obj.acceptChoice();
            obj.acceptData();
        
        if (obj.choice == 1) {
            obj.add();
        } 
        else if (obj.choice == 2){
            obj.sub();
        }
        else if (obj.choice == 3){
            obj.mul();
        }
        else if (obj.choice == 4){
            obj.div();
        }
        
        else {
            System.out.println ("Invalid Selection");
        }
    }
}

    // Function declaration

    public void menu() {

        System.out.println("Enter 1 to add");
        System.out.println("Enter 2 to Sub");
        System.out.println("Enter 3 to Mul");
        System.out.println("Enter 4 to Div");

    }

    public void add() {

        result = num1 + num2;
        System.out.println("Sum = " + result);

    }

    public void sub() {

        result = num1 - num2;
        System.out.println("Sub = " + result);

    }

    public void mul() {

        result = num1 * num2;
        System.out.println("Mul = " + result);

    }

    public void div() {
        float result1;
        float n1 = num1;
        float n2 = num2;
        result1 = n1 / n2;

        System.out.println("Div = " + result1);

    }

    public void acceptData() {
    
        System.out.println("Enter First Number");
        num1 = inp.nextInt();

        System.out.println("Enter Second Number");
        num2 = inp.nextInt();
        
        }

    public void acceptChoice() {

        System.out.println("Please select one option from above menu");
        choice = inp.nextInt();
    }
}
