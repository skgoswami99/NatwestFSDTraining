// Write a program to accept the email ID of a user and valid it by using the regular expression pattern matching.

package BasicDemo.RegEX;

import java.util.Scanner;
import java.util.regex.Pattern;

public class RegEX1 {

    Scanner inp = new Scanner(System.in);

    public static void main(String[] args) {

        RegEX1 obj = new RegEX1();

        System.out.println("Please enter email address");
        String email = new String(obj.inp.next());

        boolean result = Pattern.matches("[a-zA-Z0-9]*[@][a-zA-Z]*[.][a-zA-Z]*", email);

        System.out.println(result);
    }

}







