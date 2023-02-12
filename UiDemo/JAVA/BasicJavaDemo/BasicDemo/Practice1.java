/*Write a program that accepts the username and password and performs the following tasks:

Task1:   Create a password of less than 15 characters.

Task2: Ensure that the username is "James" and password entered is "password@123".

Task3: Display the welcome message with the username in an appropriate case.*/

package BasicDemo;

import java.util.Scanner;

public class Practice1 {
    
String username = "James";
String password = "password@123";
String username1;
String password1;

Scanner inp = new Scanner(System.in);

public void login () {

System.out.println("Enter Username");
username1 = inp.next();

System.out.println("Enter Password");
password1 = inp.next();

if (username1.equals(username) && password1.equals(password)) {
    System.out.println("You are successfully logged in " + username);
}
    else {
        System.out.println("Details not matched");
    }

}


public static void main(String[] args) {

    Practice1 obj = new Practice1();

    obj.login();

    
}
}
