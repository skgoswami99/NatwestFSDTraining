package natwest.io;

import java.io.*;

public class JavaWATFileDemo
{

    File fobj = null;
    FileWriter fwo = null;
    BufferedWriter bwo = null;
    PrintWriter pwo = null;
    OutputStream os = null;

    public static void main(String[] args) {
        String filePath = "Newfile.txt";

        String appendText = "Data to be added to the file ...";

        JavaWATFileDemo jwatObj = new JavaWATFileDemo();

        jwatObj.FAUFileWriter(filePath, appendText);

        jwatObj.FAUBufferedWriter(filePath, appendText, 2);

        jwatObj.FAUPrintWriter(filePath, appendText);

        jwatObj.FAUFileOutputStream(filePath, appendText);
    }

    private void FAUPrintWriter(String filePath, String text) {
        fobj = new File(filePath);

        try {

            fwo = new FileWriter(fobj, true);
            bwo = new BufferedWriter(fwo);
            pwo = new PrintWriter(bwo);
            pwo.println(text);

        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                pwo.close();
                bwo.close();
                fwo.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }


    private void FAUFileOutputStream(String fileName, String data) {

//        char[] mydata = data.toCharArray();

        try {

            os = new FileOutputStream(new File(fileName), true);
            os.write(data.getBytes(), 0, data.length());
        } catch (IOException e) {
            e.printStackTrace();
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


    private void FAUFileWriter(String filePath, String text) {
        fobj = new File(filePath);

        try {
            fwo = new FileWriter(fobj, true);
            fwo.write(text);

        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                fwo.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
