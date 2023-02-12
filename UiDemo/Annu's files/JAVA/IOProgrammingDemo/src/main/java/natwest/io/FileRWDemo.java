package natwest.io;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Scanner;


//Program to Read and write byte stream
public class FileRWDemo
{

    FileInputStream fis = null;
    FileOutputStream fos = null;
    Scanner sin = null;

    public void writeData()throws IOException
    {
        fos = new FileOutputStream("myfile1.txt");
        sin = new Scanner(System.in);

        System.out.println("Enter the data to be written to the file ...");
        String data = sin.nextLine();

        char[] chardata = data.toCharArray();

        for (int i=0;i< chardata.length;i++)
        {
            fos.write(chardata[i]);
        }
    }

    public void readData() throws IOException
    {
        fis = new FileInputStream("myfile1.txt");

        int mydata;

        while((mydata = fis.read()) !=-1 )
        {
            System.out.print((char)mydata);
        }
    }


    public static void main(String[] args) throws IOException
    {

        FileRWDemo frwObj = new FileRWDemo();

        frwObj.writeData();
        frwObj.readData();
    }
}