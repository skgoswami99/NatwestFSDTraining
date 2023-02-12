package natwest.io;

import java.io.*;

public class FileWADemo
{
    File fobj=null;
    FileWriter fwo = null;
    OutputStream os = null;
    BufferedWriter bwo = null;

    public void writeAppendData(String filename, String dataAppend) throws IOException {

        fobj= new File(filename);
        try {
            fwo = new FileWriter(fobj, true);
            fwo.write(dataAppend);

        } finally {
                fwo.close();
        }

    }

    private void FAUFileOutputStream(String fileName, String data) {

        try {

            os = new FileOutputStream(new File(fileName), true);
            os.write(data.getBytes(), 0,data.length());

        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("Test "+e.getMessage());
        } finally {
            try {
                os.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    private void FAUBufferedWriter(String filePath, String text, int noOfLines) {
        fobj = new File(filePath);

        try {

            fwo = new FileWriter(fobj, true);
            bwo = new BufferedWriter(fwo);
            for (int i = 0; i < noOfLines; i++) {
                bwo.newLine();
                bwo.write(text);
            }

        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                bwo.close();
                fwo.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) throws IOException
    {
        String data = "Writes len bytes from the specified byte array starting at offset off to this file output stream.";

        FileWADemo fwao=new FileWADemo();

//        fwao.writeAppendData("myfile.txt","\nData1 ");
//        fwao.writeAppendData("myfile.txt","\nData2 ");
//        fwao.writeAppendData("myfile.txt","\nData3 ");
//        fwao.writeAppendData("myfile.txt","\nData4 ");


//        fwao.FAUFileOutputStream("myfile1.txt", "Data1");

        fwao.FAUBufferedWriter("myfile1.txt", data,2);

    }
}