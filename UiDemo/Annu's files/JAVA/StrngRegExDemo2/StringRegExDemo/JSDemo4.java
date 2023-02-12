package StringRegExDemo;

public class JSDemo4 {
    public static void main(String[] aa) {

        // immutable string
        String fname = "Tim";
        String lname = "Kumar";

         String fullname = fname + lname;

        System.out.println(fullname);

        fullname = fullname.replace("Tim", "Test");

        System.out.println(fullname);

        fullname = fullname.replace("TestKumar", "Java");

        System.out.println(fullname);

    }

}
