// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has - Grammer and Accounts
// and other 50 has -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of.
//        You can assume their scores on their respective.


// Write your code here

let students =
[
       {name:"Tim", grammer:76, accounts:60, physics:null},
       {name:"Rim", grammer:64, accounts:70, physics:null},
       {name:"Zim", grammer:88, accounts:null, physics:84},
       {name:"Kim", grammer:92, accounts:null, physics:66},
       {name:"Sim", grammer:76, accounts:60, physics:null},
       {name:"Aim", grammer:64, accounts:70, physics:null},
       {name:"Bim", grammer:88, accounts:null, physics:84},
       {name:"Cim", grammer:92, accounts:null, physics:66},
       {name:"Dim", grammer:76, accounts:60, physics:null},
       {name:"Eim", grammer:64, accounts:70, physics:null},
       {name:"Fim", grammer:88, accounts:null, physics:84},
       {name:"Gim", grammer:92, accounts:null, physics:66},     

]

for (let i = 0; i < students.length; i++) {

        let stdName = (students[i].name);
        let totalMarks = (students[i].grammer + students[i].physics + students[i].accounts);
        let result = (stdName + " = " + totalMarks/2 + " %");
        console.log(result);
   
}