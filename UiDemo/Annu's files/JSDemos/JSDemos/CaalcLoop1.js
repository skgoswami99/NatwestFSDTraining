var a=10;
var b=9;

var n1=[6,2,3,4,5]
var n2=[2,3,1,4,5]

var count=0;

var choice="No";

do
{ 
    console.log("Hello World !!!  ",choice);

    if(n1[count] < n2[count])
    {
        choice = "Yes";
    }
    else
    {
        choice = "No";
    }

    count++;
    
}while(choice === "Yes")


