package OOPDemos2;

import java.util.Scanner;

public class FTEmployee extends Employee implements Greetings {

    int noOfdays;
    float dailySal;
    float hra;

    Scanner sin;
    // Accept all the details related to customer

    public FTEmployee() {
        System.out.println("Child class constructor");
        sin = new Scanner(System.in);
    }

    @Override
    public void accept() {
        // super is the reference of parent class which is Employee class here
        super.accept();

        System.out.println("Enter No Of Days");
        noOfdays = sin.nextInt();

        System.out.println("Enter Daily Salary");
        dailySal = sin.nextFloat();

        System.out.println("Enter Hras");
        hra = sin.nextFloat();
    }

    // Annotation
    @Override
    public void display() {

        super.display();
        System.out.println("No Of Days " + noOfdays);
        System.out.println("Daily Salary " + dailySal);
        System.out.println("Hra " + hra);
    }

    @Override // override will give error if it doesn't fine any method to override in parent class
    public void calcSalary() {
        float totSal = (noOfdays * dailySal) + hra;

        System.out.println(totSal);
    }

}