package BasicDemo;

import java.util.Scanner;

public class JavaDemo1 {

    int num1 = 12;
    int num2 = 5;

    // float num1;
    // float num2;

    int result = 0;

    Scanner inp = new Scanner(System.in); // To take input from system. "in" here means inputfromSystem


   public static void main(String[] args) {
       
    JavaDemo1 obj = new JavaDemo1();
    // static main function can't call the normal functions directly.
    //so it need to be linked with the class like this so that it can then call functions.

    obj.acceptData();
    obj.add();
    // called the add function within Main so that it can process and display 

    obj.sub();
    obj.mul();
    obj.div();
    
    }

// Function declaration 
     
    public void add(){

        result = num1 + num2;
        System.out.println("Sum = " + result);

    }

    public void sub(){

        result = num1 - num2;
        System.out.println("Sub = " + result);

    }

    public void mul(){

        result = num1 * num2;
        System.out.println("Mul = " + result);

    }

    public void div(){
        float result1;
        float n1 = num1;
        float n2 = num2;
        result1 = n1 / n2;
        
        System.out.println("Div = " + result1);

    }

    public void acceptData(){

        System.out.println("Enter First Number");
        num1 = inp.nextInt();

        System.out.println("Enter Second Number");
        num2 = inp.nextInt();

    }
};