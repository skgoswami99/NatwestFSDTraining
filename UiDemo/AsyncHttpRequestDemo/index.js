function retrieveAllStudents(event) 
{
// Calling the XMLHttpRequest. Here Taken the reference of XMLHTTPRequest and stored in httpreq variable
    const httpreq = new XMLHttpRequest();

// Initiializing the request with .open. GET http method we used here is to retrieve the data from server.
    httpreq.open('GET', 'http://localhost:3000/students');

// Adding Request header and every request must have the header. This must be called after open and before send. 
// storing the content type and MIME type of our JSON database
    httpreq.setRequestHeader("content-type" , "application/json");

// sending the request    
    httpreq.send();

// The onreadystatechange property specifies a function to be executed every time the status of the XMLHttpRequest object changes
    httpreq.onreadystatechange = ()=> 

    {
    // when ready state  is equal to the XMLhttp status 200 0r done then the response is ready.  
        if (httpreq.readyState === XMLHttpRequest.DONE) {
            
            const stdDetails = JSON.parse(httpreq.response); 
            // This is to parse the JSON data we are getting as a response and store in StdDetails.

            console.log(stdDetails);

            const tbody = document.getElementsByTagName('tbody')[0];

            let innerHTMLcontentOfTable = '';

            stdDetails.forEach(StdObj => {
                innerHTMLcontentOfTable = innerHTMLcontentOfTable + `
                
                <tr>
                        <td>
                            ${StdObj.id}                                                            
                        </td>
                        <td>
                            ${StdObj.name}                                                            
                        </td>
                        <td>
                            ${StdObj.contactno}                                                            
                        </td>
                        <td>
                            ${StdObj.email}                                                            
                        </td>
                        <td>
                            <button class="btn btn-primary" onclick=updatestudentfromJSONDB${StdObj.id})>Update</button>
                        
                        </td>

                        <td>
                            <button class="btn btn-primary" onclick=deletestudentfromJSONDB${StdObj.id})>Delete</button>
                        
                        </td>
                        


                </tr>               
                `
                tbody.innerHTML=innerHTMLcontentOfTable;
            });
        }

    }    
}

function insertStudentToJSONDB(event) 
{
// This preventdefault is to stop the auto refresh as it will send blank data to server coz it gets refreshed when enter some data and when we press submit it submits blank data.
    event.preventDefault();

// linking our data in HTML here with new vairables of same name.
    const name = document.getElementById('name').value;
    const contactno = document.getElementById('contactno').value;
    const email = document.getElementById('email').value;

// Storing all three data in to one variable StdInput
    const stdInput =
    {
        "name":name,
        "contactno":contactno,
        "email":email
    }

    const httpreq = new XMLHttpRequest();

    httpreq.open('POST','http://localhost:3000/students')
    httpreq.setRequestHeader('content-type', 'application/json')

// converting JS data in to JSON data by using Strigify
    httpreq.send(JSON.stringify(stdInput))

    httpreq.onreadystatechange = () =>

    {
        if (httpreq.readyState === XMLHttpRequest.DONE)
        {retrieveAllStudents(event)}
    }
}

function updateStudentfromJSONDB(id)
{

    const stdInput =
    {
        "name":"UpdatedName",
        "contactno":"UpdatedName",
        "email":"UpdatedName"
    }

    const httpreq = new XMLHttpRequest();

    httpreq.open('PUT',`http://localhost:3000/students/${id}`);
    httpreq.setRequestHeader('Content-Type','application/json');
    httpreq.send(JSON.stringify(stdInput));

    httpreq.onreadystatechange = ()=>
    {
        if(httpreq.readyState === XMLHttpRequest.DONE)
        {
            retrieveAllStudents(event);
        }
    }
}

function deleteStudentfromJSONDB(id)
{
    const httpreq = new XMLHttpRequest();

    httpreq.open('DELETE',`http://localhost:3000/students/${id}`);
    httpreq.setRequestHeader('Content-Type','application/json');
    httpreq.send();

    httpreq.onreadystatechange = ()=>
    {
        if(httpreq.readyState === XMLHttpRequest.DONE)
        {
            retrieveAllStudents(event);
        }
    }    
}