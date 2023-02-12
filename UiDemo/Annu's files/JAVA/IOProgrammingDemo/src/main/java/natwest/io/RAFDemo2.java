package natwest.io;

import java.io.IOException;
import java.io.RandomAccessFile;

public class RAFDemo2
{
    public void dataReadWrite() throws IOException {

        RandomAccessFile fObj = new RandomAccessFile("Nfile.txt","rw");

        for(int i =1;i<= 10 ;i++)
        {
            fObj.writeInt(i*33);
        }

        for(int i =0;i< 40 ;i=i+4)
        {
            fObj.seek(i);
            System.out.println(fObj.readInt());
        }

        fObj.seek(9*4);
//
//        int data1 = fObj.readInt();
//        System.out.println(data1);
//
        System.out.println(fObj.length());
        fObj.writeLong(2222);
        System.out.println(fObj.length());
        long data2 = fObj.readLong();
        System.out.println(data2);
//
//        System.out.println(fObj.length());
//
//        fObj.seek(36);
//        int data2 = fObj.readInt();
//        System.out.println(data2);
//
//        System.out.println(fObj.length());
    }

    public static void main(String[] args) throws IOException {

        RAFDemo2 raObj = new RAFDemo2();
        raObj.dataReadWrite();

    }
}
