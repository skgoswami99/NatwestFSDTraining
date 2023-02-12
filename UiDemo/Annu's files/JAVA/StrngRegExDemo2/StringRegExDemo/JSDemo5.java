package StringRegExDemo;

public class JSDemo5 {
    public static void main(String[] aa) {

        // mutable string, we can modify the string content

        // StringBuilder fname = new StringBuilder("Tim ");
        // StringBuilder lname = new StringBuilder("Kumar");

        StringBuffer fname = new StringBuffer("Tim ");
        StringBuffer lname = new StringBuffer("Kumar");

        fname.append(lname);

        System.out.println(fname);

        fname.replace(2, 5, "Test");

        System.out.println(fname);
    }
}