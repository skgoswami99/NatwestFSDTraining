package StringRegExDemo;

public class JSDemo3 {

    // Concatenating the Strings
    public String joinStrings(String fName, String lName, String msg) {
        // msg = "Hello";
        // fName = "James";
        // lName = "Smith";

        String customerDetails = msg.concat(fName).concat(lName);
        return customerDetails;
    }

    // Comparing the Strings

    public void compareStrings(String str1, String str2) {
        // str1 = "Hello";
        // str2 = "James";
        boolean result = str1.equals(str2);
        System.out.println(result);
    }

    // Comparing The strings by ignoring the case

    public void compareIgnoreCaseStrings(String str1, String str2) {

        System.out.println(str1.compareTo(str2));
        
        System.out.println(str1.compareToIgnoreCase(str2));
    }

    public static void main(String[] aa) {

        JSDemo3 jsobj = new JSDemo3();

        String output = jsobj.joinStrings("James ", "Smith ", "Hello ");

        System.out.println(output);

        jsobj.compareStrings("password@123", "password@123");

        jsobj.compareIgnoreCaseStrings("password@12444", "password@123");
    }
}
















// IndiaAndAmerica
// AmericaIndiaAnd
// AndAmericaIndia


















