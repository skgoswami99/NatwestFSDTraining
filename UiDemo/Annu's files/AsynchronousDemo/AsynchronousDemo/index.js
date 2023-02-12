const p =100, q=200,c=0;



function sum1(num1,num2)
{
    return num1+num2;
}

function sum2(num1,num2,num3)
{
    if(num1 === NaN && num2 === NaN && num3 === NaN)
    return num1+num2+num3;
}

var result1 = sum1(p,q);
var result2 = sum2(12,13,14);

console.log(result1);
console.log(result2);
