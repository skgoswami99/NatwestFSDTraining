// 1. Declare an array to store salary of 10 employees

var name = ["Rim","Tim","Zim","Jim","Kim","Lim","Bim","Pim","Vim","Mim"]
var salary = [15000, 20000 , 21000, 18000, 16023, 18021, 19024, 20026, 17028, 15020]

var i = 0;

// 2. Display the salary of all the 10 employees on the screen

while (i < name.length) {
    console.log("Name : " + name[i] + ", Age : " + salary[i]);
    i++
}

// 3. Display the average salary of 10 employees on the screen

function average(a, n)
      {
        var sum = 0;
        for (var i = 0; i < salary.length; i++) sum += a[i];
 
        return parseFloat(sum / n);
      }
 
    console.log("Average is : ", average(salary, salary.length));

// 4. Display the over all total salary

var sum = 0;
  
    // Running the for loop
    for (let i = 0; i < salary.length; i++) {
        sum += salary[i];
    }
  
    console.log("Sum is : " + sum)

// 5. Display the minimum salary

    console.log("Minumum salary is :", Math.min(...salary));

// 6. Display the maximum salary 

console.log("Maximum salary is :", Math.max(...salary));

// 7. Display the total count of employees

console.log("Number of total employee is : ", name.length);