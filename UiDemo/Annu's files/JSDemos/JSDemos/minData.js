var empAge = [23,21,24,25];

var min = empAge[0]

var max = empAge[0]

var counter = 0;

while(counter < empAge.length)
{
    if(empAge[counter] < min)
    {
        min = empAge[counter]
    }

    counter++;
}

console.log(min);

counter=0;

while(counter < empAge.length)
{
    if(empAge[counter] > max)
    {
        max = empAge[counter]
    }

    counter++;
}

console.log(max);


// sort the data

counter=0;

[23,21,24,25];

while(counter < empAge.length)
{
    if(empAge[counter] > empAge[counter + 1])
    {
        temp = empAge[counter + 1]
        empAge[counter + 1] = empAge[counter]
        empAge[counter] = temp
    }

    counter++;
}

console.log(empAge);




