function retrieveAllStudents(event)
{
    fetch('http://localhost:3000/students')
    .then(response => {

        if(response.status == 200)
        {
            return Promise.resolve(response.json());
        }
        else
        {
            return Promise.reject("Unable to fetch the data")
        }
    }).then(stdDetails =>{

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
    }).catch(err=>{
        console.log("Error "+err);
    })
}

function insertStudentToJSONDB(event)
{

    event.preventDefault();

    const stdname = document.getElementById('name').value;
    const stdcontactno = document.getElementById('contactno').value;
    const stdemail = document.getElementById('email').value;

    const stdInput =
    {
        "name":stdname,
        "contactno":stdcontactno,
        "email":stdemail
    }

    fetch('http://localhost:3000/student',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(stdInput)})
        .then(response => 
        {            
            if(response.status == 201)
            {
                alert("Record added !!!");
            }
            else
            {
                return Promise.reject("Unable to Add the data")
            }
        }).catch(err=>{
            console.log("Error "+err);
        })

        retrieveAllStudents();
}

function updateStudentfromJSONDB(id)
{

    
}

function deleteStudentfromJSONDB(id)
{

}

// C - Create/Insert the Data   - --- http method POST
// R - Read the Data            - --- http method GET
// U - Update the Data          - --- http method POST/PUT/PATCH
// D - Delete the Data          - --- http method DELETE
