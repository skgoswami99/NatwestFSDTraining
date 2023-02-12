package OOPDemos2;

import java.util.Scanner;

public class Customer {

    public int custId;
    public String custName;
    public int custAge;

    // Customer Has-A address. Taken the Entity reference of the Address Class
    //similar to the object reference Address custAddress = new Address() 
    //or we can give directly = new Address() refrence like public Address custAddress = new Address(); 
    public Address custAddress; 

    public Customer() {
        this.custAddress = new Address();
    }

    

    // Accept all the details related to customer
    public void accept() {

        Scanner sin = new Scanner(System.in);
        
        System.out.println("Enter Customer Id");
        custId = sin.nextInt();

        System.out.println("Enter Customer Name");
        custName = sin.next();

        System.out.println("Enter Customer Age");
        custAge = sin.nextInt();

        System.out.println("Enter Customer Streetno");
        custAddress.StreetNo = sin.next();
        

        System.out.println("Enter Customer City");
        custAddress.City = sin.next();

        System.out.println("Enter Customer Country");
        custAddress.Country = sin.next();

        System.out.println("Enter Customer Zip Code");
        custAddress.ZipCode = sin.next();

    }

    
}
