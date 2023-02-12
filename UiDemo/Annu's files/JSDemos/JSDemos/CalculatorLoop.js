var num1 = 10;
var num2 = 5;

var result;

var choice = 1;

var counter=0;

while(counter < 4)
{
    
    // console.log("Hello World ...")
    // counter=counter+1;

console.log("Calculation Options ..");

console.log("Select 1 For Addition..");
console.log("Select 2 For Substraction..");
console.log("Select 3 For Multiplication..");
console.log("Select 4 For Division..")

// console.log("Enter your Choice ..")


// () with every functions
// {} This with any scope, conditin, looping, function, class
// [] This with Arrays

if(choice <=4 && choice >=1)
{
    if(choice===1)
    {
        result = num1 + num2;
        console.log("Addition Result ", result);
    }
    else if(choice===2)
    {
        result = num1 - num2;
        console.log(result);
    }
    else if(choice===3)
    {
        result = num1 * num2;
        console.log(result);
    }
    else if(choice===4)
    {
        result = num1 / num2;
        console.log(result);
    }
    else
    {
        console.log("Invalid option");
    }
}
else
{
    console.log("Choice should be between 1 and 4 and your choice is ",choice);
}
    choice++;
    counter++;
}


// Initialization which decides the starting point

    var a=10;
    var b=9;
    var flag=true;
    var counter = 0;

    var n1=[1,2,3,4,5]
    var n2=[2,3,1,4,5]

    var count=0;

    while(flag)
    {
        console.log("Hello World !!!  ",flag);


  
        if(n1[count] < n2[count])
        {
            flag = true;
        }
        else
        {
            flag = false;
        }

        count++;
    }



    // 0+1 = 1
    // 1+2 = 2
    // 2+1 = 3
    // 3+1 = 4
    // 4+1 = 5

// for(counter = 0;counter < 10;counter++)
// {
//     console.log("World ...")
// }




