package natwest.io;

import java.io.*;
import java.util.Scanner;

//Program to Read and write Character Stream
public class FileCSRWDemo
{
    FileReader fro = null;
    FileWriter fwo = null;
    Scanner sin = null;

    public void writeData()throws IOException
    {
        try {
            fwo = new FileWriter("myfile1.txt");
            sin = new Scanner(System.in);

            System.out.println("Enter the data to be written to the file ...");
            String data = sin.nextLine();

            char[] chardata = data.toCharArray();

            for (int i = 0; i < chardata.length; i++) {
                fwo.write(chardata[i]);
            }
        }
        finally {
            if (fwo != null) {
                fwo.close();
            }
        }
    }

    public void readData() throws IOException
    {
        try {
            fro = new FileReader("myfile1.txt");

            int mydata;

            while ((mydata = fro.read()) != -1) {
                System.out.print((char) mydata);
            }
        }
        finally {
            if(fro !=null)
            {
                fro.close();
            }
        }

    }

    public static void main(String[] args) throws IOException
    {

        FileRWDemo frwObj = new FileRWDemo();

        frwObj.writeData();
        frwObj.readData();
    }
}