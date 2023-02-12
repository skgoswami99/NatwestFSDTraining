package natwest.io;

import java.io.File;
import java.io.IOException;

public class JFileOprDemo
{
    public static void main(String[] args) throws IOException
    {

//        Creating file by giving file name
        File fObj = new File("newData.txt");

//        Checking whether file created or not
        if(fObj.exists())
        {
            System.out.println("File created successfully !!!");
            System.out.println(fObj.getAbsolutePath());

            if(fObj.canRead())
            {
                System.out.println("File is Readable");
            }

            if(fObj.canWrite())
            {
                System.out.println("File is Writable");
            }

            if(fObj.canExecute())
            {
                System.out.println("File is Executable");
            }

            if(fObj.isFile())
            {
                System.out.println("File is Ordinary File");
            }
            else if(fObj.isDirectory())
            {
                System.out.println("File is directory File");
            }
        }

//        Creating file by giving file name with path

        File fObj1 = new File("E:\\StackrouteMentoring\\NATWest\\myfile1.txt");

//        Checking whether file created or not
        if(fObj1.exists())
        {
            System.out.println("File created successfully !!!");
            System.out.println(fObj1.getAbsolutePath());

            if(fObj1.canRead())
            {
                System.out.println("File is Readable");
            }

            if(fObj1.canWrite())
            {
                System.out.println("File is Writable");
            }

            if(fObj1.canExecute())
            {
                System.out.println("File is Executable");
            }
        }
    }
}
