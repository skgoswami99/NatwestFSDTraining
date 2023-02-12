package BasicDemos;

import java.util.Arrays;
import java.util.Scanner;

public class JArrayDemo3 {
    public static void main(String[] args) {

        Scanner sin = new Scanner(System.in);

        // [row][column]

        int[][] matrix1 = new int[3][3];
        int[][] matrix2 = new int[3][3];

        int[][] matrix3 = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };
        int[][] matrix4 = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };

        for (int i = 0; i < matrix3.length; i++) {
        for (int j = 0; j < matrix3[i].length; j++) {

        // System.out.println("Enter the Data !!! " + i + " " + j);
        // matrix1[i][j] = sin.nextInt();
        
        System.out.print(matrix3[i][j] + " ");
        }
        System.out.println();
        
    }
       

        // char[][] name = { { 'T', 'i', 'm' }, { 'R', 'i', 'm' }, { 'K', 'i', 'm' } };

        // for (int i = 0; i < name.length; i++) {
        //     System.out.println("\n");
        //     for (int j = 0; j < name[i].length; j++) {

        //         System.out.print(name[i][j]);

        //     }
        // }

    }
}
