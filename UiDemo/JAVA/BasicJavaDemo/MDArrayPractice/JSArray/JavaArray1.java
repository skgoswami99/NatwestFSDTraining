// Write a program to do the sum of two 3X3 matrix

package JSArray;

public class JavaArray1 {

    public static void main(String[] args) {

        int[][] matrix1 = { { 2, 5, 7 }, { 1, 6, 7 }, { 3, 4, 7 } };
        int[][] matrix2 = { { 12, 15, 17 }, { 11, 16, 17 }, { 13, 14, 17 } };

        int[][] newmatrix = new int[3][3];

        for (int i = 0; i < matrix1.length; i++) {

            for (int j = 0; j < matrix1[i].length; j++) {
                newmatrix[i][j] = matrix1[i][j] + matrix2[i][j];
            }
        }

        for (int i = 0; i < newmatrix.length; i++) {
            for (int j = 0; j < newmatrix[i].length; j++) {
                System.out.println(newmatrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}