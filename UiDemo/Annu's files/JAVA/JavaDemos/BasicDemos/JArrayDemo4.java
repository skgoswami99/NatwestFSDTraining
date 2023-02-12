package BasicDemos;

import java.util.Scanner;

public class JArrayDemo4 {
    public static void main(String[] args) {

        Scanner sin = new Scanner(System.in);
        String[][] BookDetails = new String[2][2];

        for (int i = 0; i < BookDetails.length; i++) {
            System.out.println("\n");
            for (int j = 0; j < BookDetails[i].length; j++) {

                if (j % 2 == 0) {
                    System.out.print("Enter Book Name ");
                    BookDetails[i][j] = sin.next();
                } else {
                    System.out.print("Enter Author Name ");
                    BookDetails[i][j] = sin.next();
                }
            }
        }

        for (int i = 0; i < BookDetails.length; i++) {
            System.out.println("\n");
            for (int j = 0; j < BookDetails[i].length; j++) {

                if (j % 2 == 0) {
                    System.out.println("BookName ::" + BookDetails[i][j]);
                } else {
                    System.out.println("AuthorName ::" + BookDetails[i][j]);
                }

            }
        }
    }
}
