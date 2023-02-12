var empName = ["Rim","Kim","Jim"];
var empAge = [23,21,24,25];


// JavaScript Object Notation 

var empDetails=
[
    {empId: 101,empName: "Tim",empAge: 21,empSal: 12345.22,empContact: 355678},
    {empId: 102,empName: "Rim",empAge: 23,empSal: 32345.00,empContact: 365678},
    {empId: 103,empName: "Jim",empAge: 22,empSal: 22345.00,empContact: 375678},
    {empId: 104,empName: "Kim",empAge: 23,empSal: 42345.00,empContact: 315678},
    {empId: 105,empName: "Sim",empAge: 21,empSal: 32345.00,empContact: 325678},
    {empId: 106,empName: "Dim",empAge: 23,empSal: 42345.00,empContact: 344678},
    {empId: 107,empName: "Jam",empAge: 24,empSal: 52345.00,empContact: 345678}
]


// empDetails.push({empId: 108,empName: "Jam",empAge: 24,empSal: 52345.00,empContact: 345678});

// console.log(empDetails);


empDetails.sort(
    (emp1, emp2) => 
    {
        return emp1.empAge === emp2.empAge ? 0 : emp1.empAge > emp2.empAge ? 1 : -1
    }
)

empDetails.forEach(empDetails =>{
    console.log(empDetails.empName,"  ",empDetails.empId,"  ", empDetails.empAge)
})

emp21Age = empDetails.filter(emp => emp.empAge <= 21)

console.log(emp21Age)




// if value1 is equal to value2 it is denoted as 0
// if value1 is greater than value2 it is denoted as 1
// if value1 is less than value2 it is denoted as -1


// var counter =0;

// checkData="Tim";

// while(counter < empDetails.length)
// {
//     if(empDetails[counter].empName === checkData)
//     {
//         console.log(empDetails[counter].empSal);
//     }
//     // console.log(empDetails[counter].empId);
//     // console.log(empDetails[counter].empName);
    
//     counter++;
// }

// var empRec = empDetails.filter(empdata => empdata.empName === "Tim");
// console.log(empRec[0].empSal);




