package natwest.io;

import java.io.*;

public class JIODemo1
{

    private int num1;
    private int num2;

    public void acceptData() throws IOException
    {
//      Read the data from Input device
        InputStreamReader isObj = new InputStreamReader(System.in);

//      Data will store in buffer memory and ten from buffer memory data will go to variable
        BufferedReader brObj = new BufferedReader(isObj);

//        Taking input from user and storing in variable
        System.out.println("Enter the first Number ...");
        num1 = Integer.parseInt(brObj.readLine());

        System.out.println("Enter the second Number ...");
        num2 = Integer.parseInt(brObj.readLine());

    }

    public void displayData()
    {
        System.out.println(num1);
        System.out.println(num2);
    }


    public static void main(String[] args) throws IOException
    {
        JIODemo1 jioObj= new JIODemo1();

        jioObj.acceptData();

//        try
//        {
//            jioObj.acceptData();
//        }
//        catch(IOException ioeObj)
//        {
//            System.out.println(ioeObj.getMessage());
//        }

        jioObj.displayData();
    }
}
