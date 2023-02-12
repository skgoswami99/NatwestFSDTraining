package natwest.io;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.RandomAccessFile;

public class RAFIODemo
{
    public void dataReadWrite() throws IOException {

        RandomAccessFile fObj = new RandomAccessFile("Rfile.txt","rw");

        fObj.writeByte(11);
        fObj.writeChar('A');
        fObj.writeUTF("Hello World !!!");
        fObj.writeInt(12345555);
        fObj.writeDouble(2222.123);


        fObj.seek(1);

        char data3 = fObj.readChar();
        System.out.println(data3);
        String data4 = fObj.readUTF();
        System.out.println(data4);

        int data1 = fObj.readInt();
        System.out.println(data1);

        double data2 = fObj.readDouble();
        System.out.println(data2);
    }

    public static void main(String[] args) throws IOException {

        RAFIODemo raObj = new RAFIODemo();
        raObj.dataReadWrite();

    }
}