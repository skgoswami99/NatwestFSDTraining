package StringRegExDemo;

public class JSDemo1 {

    public static void main(String[] aa) {

        String fname = "Tim";
        String lname = "Kumar";

        // Concatenate the String

        String name = fname + " " + lname;

        System.out.println(name);

        // Check the length of string
        int count = 0;

        name = name + '\0';

        for (int i = 0; name.charAt(i) != '\0'; i++) {
            count++;
            // System.out.println(count);
        }

        System.out.println(count);

        // for (char mychar : fname.toCharArray()) {
        // count++;
        // }

        // System.out.println(count);

        // Check whether two strigs are equal or not

        // Covert all the characters of string in upper case

        // Delete 5th character from a given string

        // Replace the 7th character of the given string with 'A'

        // Given two string with any value take first two characters from
        // each string and cncatenate them as third string

        // Given two string with with alphanumeric value take all the
        // numbers from them and display the sum of all the numbers
        // present in both the strings

    }
}
