var empname = ["emp-1", "emp-2", "emp-3", "emp-4","emp-5","emp-6","emp-7","emp-8","emp-9","emp-10"]
var empsalary = [1000, 800, 900, 1200, 1300, 700, 800, 900, 1000, 900]

console.log("Total Emp =", empname.length);

counter = 0

while (counter < empname.length) {
    console.log("Emp name is", empname[counter], "Emp salary =", empsalary[counter]);
    counter++;
}

counter = 0
sum = 0
while (counter < empname.length)
{ sum += empsalary[counter]
counter++}

console.log("Total Salary =", sum);

console.log("Avg Salrary =", sum/10);

counter = 0
min = empsalary[0]

while (counter < empname.length)
{
    if (empsalary[counter] < min ) {min = empsalary[counter]}
counter++;
}

console.log("Lowest Salary is", min);


var max = empsalary[0]
var counteri = 0

while (counteri < empname.length) 
{
 if (empsalary[counteri] > max) {max = empsalary[counteri]}

    counteri++
 
}

console.log("Highest Salary is", max);

console.log(empsalary.sort(function (a,b) {return a-b
    
}));
