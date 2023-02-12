var empname = ["emp-1", "emp-2", "emp-3", "emp-4","emp-5","emp-6","emp-7","emp-8","emp-9","emp-10"]
var empsalary = [1000, 800, 900, 1200, 1300, 700, 800, 900, 1000, 900]

console.log("Total numner of employees = ", empname.length)

var counter = 0

while(counter < empname.length )

{
console.log( "Employee Name =", empname[counter], "and his salary is", empsalary[counter] )
counter++
}
 
var sum = 0
var counter=0;
while(counter < empsalary.length) 
{
    sum += empsalary[counter];
    counter++;
    
}

console.log("Total salary is", sum);
console.log("Average Salary is", sum/10)

// Calculating Minimum Salary

var min = empsalary[0]
var counteri = 0;

while (counteri < empname.length) 
{
    if (empsalary[counteri] < min ) 
    {
        min = empsalary[counteri]    
    }    
    counteri++;
}

console.log("Minimum Salary is", min);

// // Calculating Maximum Salary

var max = empsalary[0]
var countermax = 0

while (countermax < empname.length) 
{
  if (empsalary[countermax] > max) 
    { max = empsalary[countermax]   
    }  
    countermax++
}

    console.log("Maximum salary is", max);


    // Sort Function:
    
    console.log(empsalary.sort(function(a,z){return a-z}));

    // push function ;

    var length = empsalary.push(1500)
    console.log(length);
    console.log(empsalary); 
    
    // POP function:

    empsalary.pop()
    console.log(empsalary);
    
    // Splice Function

    // empsalary.splice(5,3)
    // console.log(empsalary);

