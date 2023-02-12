var empname = ["Sandeep", "vivek", "Pankaj", "Aashish"]
var empmobile = [8802670175, 9891233345, 7890678956, 9999676700 ]
var empage = [32,33,36,40]

console.log(empname.length)

console.log(empname [1])
console.log(empmobile [1])
console.log(empage [1])


var counter = 0

while (counter < empname.length) 
{
    console.log("Employee Name is", 
    empname[counter], ", Age is", empage[counter], ", Employee's mobile number is", empmobile[counter])
    counter++
}

