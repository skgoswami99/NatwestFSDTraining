var num1 = 10;
var num2 = 5;

var result;
var choice;



function menuDisplay()
{
    console.log("Calculation Options ..");

    console.log("Select 1 For Addition..");
    console.log("Select 2 For Substraction..");
    console.log("Select 3 For Multiplication..");
    console.log("Select 4 For Division..")
}

function add()
{
    result = num1 + num2;
    console.log("Addition Result ", result);
}

function calc()
{
    choice = 2;

    // () with every functions
    // {} This with any scope, conditin, looping, function, class
    // [] This with Arrays

    if(choice <=4 && choice >=1)
    {

    if(choice===1)
    {
        add();
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
}
