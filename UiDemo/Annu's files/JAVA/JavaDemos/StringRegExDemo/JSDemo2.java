package StringRegExDemo;

public class JSDemo2 {

    public void changeCase(String message) {

        System.out.println(message.toLowerCase());
        System.out.println(message.toUpperCase());
    }

    public int checkLen(String data) {

        int len = data.length();

        System.out.println("Length of String:" + len);

        return len;
    }

    public int add(int num1, int num2) {
        int result = num1 + num2;
        return result;
    }

    public static void main(String[] aa) {

        JSDemo2 jsObj = new JSDemo2();

        jsObj.changeCase("Java Programming");

        int lenoutput = jsObj.checkLen("password@123");

        int output1 = jsObj.add(12, 13);

        int n1 = 10, n2 = 20;

        int output2 = jsObj.add(n1, n2);

        output2++;
        System.out.println(output2);

    }
}
