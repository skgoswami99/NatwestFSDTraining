function calculate()
{
    var n1 = document.getElementById("textfieldfornum1").value; 
    var n2 = document.getElementById("textfieldfornum2").value;

    var result=0;

    var choice = document.getElementById("calcchoice").value;

    console.log(choice);


    if(choice === '1')
    {
        console.log("Inside ...Add ");
        result = parseInt(n1) + parseInt(n2);
    }
    else if(choice === '2')
    {
        console.log("Inside ...Sub ");
        result = parseInt(n1) - parseInt(n2);
    }   
    else if(choice === '3')
    {
        console.log("Inside ...Multiply ");
        result = parseInt(n1) * parseInt(n2);
    }
    else if(choice === '4')
    {
        console.log("Inside ...Div ");
        result = parseInt(n1) / parseInt(n2);
    }
    else    
    {
        console.log("Invalid choice .... ");
    }
    

    // switch(parseInt(choice))
    // {

    //     case 1:
    //         console.log("Inside ...Add ");
    //         result = parseInt(n1) + parseInt(n2);
    //     break;
    //     case 2:
    //         result = parseInt(n1) - parseInt(n2);
    //     break;
    //     case 3:
    //         result = parseInt(n1) * parseInt(n2);
    //     break;
    //     case 4:
    //         result = parseInt(n1) / parseInt(n2);
    //     break;
    //     default:
    //         console.log("Invalid choice ..")
    //     break;
    // }

    // What element to be added   - Create that element
    // What text will be there in element
    // Add the content to the new element
    // Under which tag the new tag will be added

 
 
    // Created Para
    var mypara = document.createElement('h1');
    
    // Created Text node and added result value in it
    var paratext = document.createTextNode(result);

    // Added text node inside paragraph
    mypara.appendChild(paratext);

    // Taken the reference of body tag where para needs to be added
    var mybodytag = document.getElementsByTagName('body');

    // Added para tag inside the body tag
    mybodytag[0].appendChild(mypara);



 



    // document.getElementById("finalresult").textContent = result;
    console.log("Final Data",result);
}