package StringRegExDemo;

import java.util.regex.Pattern;

public class JRDemo3 {

    public static void main(String[] aa) {

        String name = "Tim";

        boolean status1 = Pattern.matches("[Tt]im", "Tim");

        System.out.println(status1);

        boolean status2 = Pattern.matches(".*Tim.*", "Hello tim, Test");

        System.out.println(status2);

        boolean status3 = Pattern.matches("Tim", "Hello Tim, Test");

        System.out.println(status3);

        boolean status4 = Pattern.matches("[a-dA-D][a-zA-Z][a-zA-Z]", "Dim");

        System.out.println(status4);

        boolean status5 = Pattern.matches("[^\\d].*", "1Dim");

        System.out.println(status5);

        boolean status6 = Pattern.matches("\\D*", "DDDDim1");

        System.out.println(status6);
    }
}