var num1 = 10;
var num2 = 5;

var result;

function display()
{
    document.write("From js file fuctions ..")
}

// Declare the function
function add()
{
    result = num1 + num2;
    console.log("Addition Result ", result);
}

function add(a,b)
{
    result = a + b;
    return result;
}

result = add(4,5);

// var data2 = ++result
// console.log(data1)
// console.log(data2)

console.log(++result)
console.log(result++)
console.log(result)
console.log(result)

// result = add(3,5);
// console.log(result)

// result = add(1,5);
// console.log(result)

// add(7,8);
// add(5,6);

// add(num1,num2);



// function sub()
// {
//     result = num1 - num2;
//     console.log("Addition Result ", result);
// }

// function mul()
// {
//     result = num1 + num2;
//     console.log("Addition Result ", result);
// }

// function div()
// {
//     result = num1 + num2;
//     console.log("Addition Result ", result);
// }

// Calling the functions to get the output



var myfunc1 = function(a,b)
{
    return a +b
}

console.log(myfunc1(3,2));

var myfunc2 = (a,b) =>
{
    return a + b;
}

console.log(myfunc2(3,4));

















