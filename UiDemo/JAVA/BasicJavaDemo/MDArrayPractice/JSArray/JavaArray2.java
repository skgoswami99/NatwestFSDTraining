
// Write a program to create matrix Transpose

package JSArray;

public class JavaArray2 {

    public static void main(String[] args) {

        int[][] matrix1 = { { 2, 5, 7 }, { 1, 6, 7 }, { 3, 4, 7 } };

        // Expected outcome = {{2, 1, 3}. {5, 6, 4}, {7, 7, 7}}

        // Instanciating new Array:

        int[][] newmatrix = new int[3][3];

        // Outer for loop for outer Array:

        for (int i = 0; i < matrix1.length; i++) {

            // Inner loop for inner Array on index 0 of outer array:

            for (int j = 0; j < matrix1[i].length; j++) {

                // Assigning values from old array to new array on different position:

                newmatrix[j][i] = matrix1[i][j];

            }

        }

        for (int i = 0; i < newmatrix.length; i++) {
            for (int j = 0; j < newmatrix[i].length; j++) {
                System.out.println(newmatrix[i][j] + " ");
                System.out.println();
            }
        }
    }
}
