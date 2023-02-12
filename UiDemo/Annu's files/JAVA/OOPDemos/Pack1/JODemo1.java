package Pack1;

public class JODemo1 {

    // within same class only where it is declared
    private int num1;

    // default scope within same class and same package only
    int num2;

    // Can be accessed everywhere within class, within package, outside package and
    // project as well
    public int num3;

    // Can be accessed within package without ineritance but everywhere within
    // class within package, outside package and project as well with inheritance
    protected int num4;

    private void accept() {

        num1 = 10;
        num2 = 20;
        num3 = 30;
        num4 = 40;

    }

    // Method Overloading

    public void display() {

    }

    public void display(String fname) {

    }

    protected void display(String fnme, String lname) {

    }

    public void display(int num) {

    }

    public void add(int num1, int num2) {

    }

    public void add(int num1, float num2) {

    }

    public void add(int num1, int num2, int num3) {

    }

}