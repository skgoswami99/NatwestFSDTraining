

var num1=8
var num2=2

var result;
var counter=0
var choice=1

while (counter < 5)
{


console.log("Calculate Here")
console.log("Press 1 to add")
console.log("Press 2 to Substaract")
console.log("Press 3 to Multiply")
console.log("Press 4 to Divide")



if (choice === 1) 
{
   result = num1 + num2
   console.log("Your added number is", result) 
}

else if (choice === 2) 
{
   result = num1 - num2
   console.log("Your substracted number is", result) 
}

else if (choice === 3) 
{
   result = num1 * num2
   console.log("Your multiplied number is", result) 
}

else if (choice === 4) 
{
   result = num1 / num2
   console.log("Your divided number is", result) 
}

else{
    console.log("Inalid input")
}

choice = choice + 1;
counter = counter + 1;
}