package OOPDemos2;

import java.util.Scanner;

public class PTEmployee extends Employee {

    int noOfhoursworked;
    float hourlyWages;

    // Accept all the details related to customer
    @Override
    public void accept() {

        super.accept();
        Scanner sin = new Scanner(System.in);

        System.out.println("Enter No Of Hours");
        noOfhoursworked = sin.nextInt();

        System.out.println("Enter Hourly Wage");
        hourlyWages = sin.nextFloat();

    }

    @Override
    public void display() {

        super.display();
        System.out.println("No Of Hours " + noOfhoursworked);
        System.out.println("Hourly Wages " + hourlyWages);
    }

    @Override
    public void calcSalary() {
        float totSal = (noOfhoursworked * hourlyWages);

        System.out.println(totSal);
    }
}
