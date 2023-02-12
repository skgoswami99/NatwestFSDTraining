function calc()

{
    var n1 = document.getElementById("textnum1").value;
    var n2 = document.getElementById("textnum2").value;

    var result = 0

    var choice = document.getElementById("calchoice").value;

    console.log(choice);

    if(choice === '1')
    {
        console.log("Inside ...Add ");
        result = parseInt(n1) + parseInt(n2)
    }

    else if(choice === '2')
    {
        result = parseInt(n1) - parseInt(n2)
    }

    else if(choice === '3')
    {
        result = parseInt(n1) * parseInt(n2)
    }

    else if(choice === '4')
    {
        result = parseInt(n1) / parseInt(n2)
    }
    
    else 
    {console.log("Invalid Input");
    }

    var mypara = document.createElement('p')

    var paratext = document.createTextNode(result)
    
    mypara.appendChild(paratext)

    var mybody = document.getElementsByTagName("body")

    mybody[0].appendChild(mypara)

    // This outcome we created in HTML first and thenk linked it here with the result.
    // So that the Html page can then show the result there

    // document.getElementById("outcome").textContent = result 

    console.log("The outcome is ", result);

}
