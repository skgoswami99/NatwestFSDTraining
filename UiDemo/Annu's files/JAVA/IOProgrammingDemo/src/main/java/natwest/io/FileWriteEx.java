package natwest.io;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class FileWriteEx
{
    String fileName="E:\\StackrouteMentoring\\NATWest\\JPO.txt";

    String mydata ="This is the file data";

    File fObj = new File(fileName);

    FileOutputStream fos = null;

    public void writeData()throws IOException
    {
        fos = new FileOutputStream(fObj);

        char[] str = mydata.toCharArray();

        for (int i=0;i< str.length;i++)
        {
               fos.write(str[i]);
        }
    }

    public static void main(String[] args)throws IOException
    {
        FileWriteEx fwObj = new FileWriteEx();
        fwObj.writeData();
    }
}
