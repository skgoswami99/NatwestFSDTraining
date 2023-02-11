/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (rows) => {
	// Write your code here

// let rows = 6;

let output = "";

     for (let i = 1; i <= rows; i++) {
          
          for (let space = 0; space < rows - i; space++) {
              output += " ";}
          for (let s = 0; s < i; s++) {   
               output += " *";}
                                   
          output += "  \n";
          
     }    
       return output;   
};
// let a = buildPyramid(6)
// console.log(a);

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
