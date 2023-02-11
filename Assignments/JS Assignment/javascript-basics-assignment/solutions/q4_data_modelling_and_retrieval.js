// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

let fruitlist = 
[
    {name: "Banana", color: "Yellow", pricePerKG: 60},
    {name: "Apple", color: "Red", pricePerKG: 120}
]
    

let fruitFilter = (arr,filter) => {

    let details = arr.filter(fdata => fdata.name === filter)

    const result = "The color of " + filter + " is "+ details[0].color + ", and Price/Kg is " + details[0].pricePerKG + ".";
    return (result);
}
let userInput = fruitFilter(fruitlist,"Banana")
console.log(userInput);