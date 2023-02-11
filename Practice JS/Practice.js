
var num1 = 25
var num2 = 75


// function add()
//     {sum = num1 + num2
//         console.log(sum);
//     }

//     console.log(add());

// console.log("Press 1 to add");
// console.log("Press 2 to sub");
// console.log("Press 3 to Mul");
// console.log("Press 4 to Div");

var choice;
choice = 1;


while (choice <= 5) 

{

        {
        if (choice===1) 
        {
            result = num1 + num2;
        console.log("Addition result :", result);   
        }

        else if (choice===2) 
        {
            minus = num1 - num2;
        console.log("subtracted result :", minus);   
        }

        else if (choice===3) 
        {
            multiply = num1 * num2;
        console.log("multiplied result :", multiply);   
        }

        else if (choice===4) 
        {
            divided = num1 / num2;
        console.log("Divided result :", divided);   
        }

        else  {console.log ("Invalid option")}
        }
        choice++
        
    }