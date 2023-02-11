/* Write a Program to convert an array of objects to an object
	based on a given key */

	// let data = [{ id: 1, name: 'Ankit', role: 'Developer'},
	// 	{ id: 2, name: 'Pankhuri', role: 'Lead'},
	// 	{ id: 3, name: 'Anubha', role: 'QA'}];

const convert = (arr, filter) => {
	// Write your code here
if (Array.isArray(arr)) {

let obj = arr.reduce((accumulator, currentvalue) => {
	
	return {...accumulator, [currentvalue[filter]]: currentvalue}

}, 0);
	return obj;
}
else {return null}
}; 

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
// let userInput = convert(data, "id")
// console.log(userInput);
