package natwest.io;

import java.io.IOException;
import java.io.RandomAccessFile;

public class RAFDemo3
{
    public void dataReadWrite() throws IOException {

        RandomAccessFile fObj = new RandomAccessFile("Nfile.txt","rw");

        int empId=1001;
        String empName = "Tim";
        byte[] ename= empName.getBytes();
        int empAge = 23;
        double empSal = 23456.66;

        fObj.writeInt(empId);
        System.out.println(fObj.length());
        fObj.writeUTF(empName);
        System.out.println(fObj.length());
        fObj.writeInt(empAge);
        System.out.println(fObj.length());
        fObj.writeDouble(empSal);
        System.out.println(fObj.length());

//        fObj.seek(0);
//        empId = fObj.readInt();
//        System.out.println(empId);

        fObj.seek(4);
        empName = fObj.readUTF();
        System.out.println(empName);

//        fObj.seek(9);
        empAge = fObj.readInt();
        System.out.println(empAge);

//        fObj.seek(13);
        empSal = fObj.readDouble();
        System.out.println(empSal);


    }

    public static void main(String[] args) throws IOException {

        RAFDemo3 raObj = new RAFDemo3();
        raObj.dataReadWrite();

    }
}
