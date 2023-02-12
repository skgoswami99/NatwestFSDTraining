package StringRegExDemo;

public class JRDemo2 {

    public static void main(String[] aa) {

        String newstr = new String("should have roughts for login dashboard, register and readnow.");

        boolean status1 = newstr.matches("(.*) login dash(.*)");

        System.out.println(status1);

        boolean status2 = newstr.matches("(.*).");

        System.out.println(status2);

    }

}