function retrieveAllStudents(event)
{
    console.log("Test");

    // Taken the reference of XMLHTTPRequest and stored in httpRequest variable
    const httpreq = new XMLHttpRequest();
    
    httpreq.open('GET','http://localhost:3000/students');

    console.log("Test");

    // Adding Request header and every request must have the header whether we give or do not give
    httpreq.setRequestHeader('Content-Type','application/json');

    httpreq.send();

    console.log("Test");    

    httpreq.onreadystatechange = ()=>
    {
        console.log("Test");
        if(httpreq.readyState === XMLHttpRequest.DONE)
        {
            const stdDetails = JSON.parse(httpreq.response);

            console.log(stdDetails);

            const tbody = document.getElementsByTagName('tbody')[0];

            let stdinnerHtmlContentofTable = '';

            stdDetails.forEach(stdObj => {

                stdinnerHtmlContentofTable = stdinnerHtmlContentofTable + `
                
                    <tr>
                        <td>
                            ${stdObj.id}
                        </td>
                        <td>
                            ${stdObj.name}
                        </td>
                        <td>
                            ${stdObj.contactno}
                        </td>
                        <td>
                            ${stdObj.email}
                        </td>
                        
                        <td>
<button class="btn btn-primary" onclick=updateStudentfromJSONDB(${stdObj.id})>Update</button>                           
                        </td>
                        <td>
<button class="btn btn-primary" onclick=deleteStudentfromJSONDB(${stdObj.id})>Delete</button>
                        </td>
                    </tr>            
                `;

                tbody.innerHTML=stdinnerHtmlContentofTable;
            })

        }
    }
}

function insertStudentToJSONDB(event)
{
    event.preventDefault();

    const name = document.getElementById('name').value;
    const contactno = document.getElementById('contactno').value;
    const email = document.getElementById('email').value;

    const stdInput =
    {
        "name":name,
        "contactno":contactno,
        "email":email
    }

    const httpreq = new XMLHttpRequest();

    httpreq.open('POST','http://localhost:3000/students');
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

// C - Create/Insert the Data   - --- http method POST
// R - Read the Data            - --- http method GET
// U - Update the Data          - --- http method POST/PUT/PATCH
// D - Delete the Data          - --- http method DELETE
