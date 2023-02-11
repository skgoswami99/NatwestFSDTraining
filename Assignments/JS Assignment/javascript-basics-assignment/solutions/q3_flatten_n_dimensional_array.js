/* Write a Program to Flatten a given n-dimensional array */

// let data = [1, [2, 3], [[4, 5], [6, 7]], [[[8, 9], 10]]]
const flatten = (data) => {
	// Write your code here

	if (Array.isArray(data)) {

	let arr = data.flat(Infinity);
	return arr;
} 
else {
	return null;	
}

	
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
// let a = flatten(data)
// console.log(a);
