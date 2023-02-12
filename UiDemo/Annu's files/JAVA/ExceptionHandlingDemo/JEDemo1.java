package ExceptionHandlingDemo;

public class JEDemo1 {

    // int num1 = 10;
    // int num2 = 0;

    int[] num = { 12, 0 };

    public int div() {
        int result = 0;
        try {
            result = num[0] / num[2];

        } catch (ArithmeticException eobj) {

            System.out.println(" Divide by 0 is not possible !!! " + eobj.getMessage());
            // eobj.printStackTrace();
        } catch (ArrayIndexOutOfBoundsException eobj) {

            System.out.println(" Check the array size !!! " + eobj.getMessage());
            // eobj.printStackTrace();
        } catch (Exception eobj) {

        }

        return result;
    }

    public void display() {
        System.out.println("Hello World!!");
    }

    public static void main(String[] args) {

        JEDemo1 jobj = new JEDemo1();

        jobj.div();
        jobj.display();
    }
}

/*
 * Different Types of Errors in Java Program
 * Syntax Error or compiler Error
 * 
 * Logical Error
 * 
 * Runtime Error
 * 
 * 
 * 
 */
