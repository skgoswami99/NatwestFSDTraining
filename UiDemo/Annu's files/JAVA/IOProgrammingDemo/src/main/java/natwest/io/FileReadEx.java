package natwest.io;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

public class FileReadEx
{
    String fileName="E:\\StackrouteMentoring\\NATWest\\JPODemo1.java";

    File fObj = new File(fileName);

    FileInputStream fis = null;

    public void readData()throws IOException
    {
        if(fObj.exists()) {
            if (fObj.canRead()) {
                fis = new FileInputStream(fObj);

                int mydata;

//                int data = fis.read();
//                char data1 = (char)fis.read();
//
//                System.out.println(data);
//                System.out.println(data1);

                while((mydata = fis.read()) !=-1 )
                {
                    System.out.print((char)mydata);
                }

                fis.close();
            }
        }
    }

    public static void main(String[] args) throws IOException
    {

        FileReadEx freObj = new FileReadEx();

        freObj.readData();
    }
}
