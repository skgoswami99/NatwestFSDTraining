function register(event) {
    event.preventDefault()

    let FirstName = document.getElementById("FirstName").value;
    let LastName = document.getElementById("LastName").value;
    let Username1 = document.getElementById("Username1").value;
    let Address = document.getElementById("Address").value;
    let RollNumber = document.getElementById("RollNumber").value;
    let PhoneNumber = document.getElementById("PhoneNumber").value;
    let Email1 = document.getElementById("Email1").value;
    let Password1 = document.getElementById("Password1").value;
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let pwdFormat = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{6,20}$/;


    const DB =
    {
        "First Name": FirstName,
        "Last Name": LastName,
        "Username": Username1,
        "Address": Address,
        "Roll Number": RollNumber,
        "Phone Number": PhoneNumber,
        "Email": Email1,
        "Password": Password1
    }

    if (FirstName == "" || LastName == "" || Username1 == "" || Address == "" || RollNumber == ""
        || PhoneNumber == "" || Email1 == "" || Password1 == "") {
        alert("fields can't be left blank")
    }

    if (!Email1.match(mailFormat)) {
        alert("Invalid email format")

    }

    else if (!Password1.match(pwdFormat)) {
        alert("password must be as per criteria below")
    }


    else {

        const Getrequest = new XMLHttpRequest();
        Getrequest.open('GET', 'http://localhost:3000/StdDetails');
        Getrequest.setRequestHeader("content-type", "application/json");
        Getrequest.send();
        Getrequest.onreadystatechange = () => {
            if (Getrequest.readyState === XMLHttpRequest.DONE) {

                const Data = JSON.parse(Getrequest.response);

                let emailarr = []

                Data.forEach(element => {
                    emailarr.push(element.Email)

                });

                if (emailarr.indexOf(Email1) == -1) {

                    const postreq = new XMLHttpRequest();

                    postreq.open('POST', 'http://localhost:3000/StdDetails');
                    postreq.setRequestHeader('Content-Type', 'application/json');
                    postreq.send(JSON.stringify(DB));

                    postreq.onreadystatechange = () => {
                        if (postreq.readyState === XMLHttpRequest.DONE) {
                            alert("Registration successful!! You can login now !!")
                        }
                    }
                } else {
                    alert("Email adready registered")
                }
            }
        }
    }
}

function login(event) {
    event.preventDefault()

    let Username2 = document.getElementById("UserName2").value;
    let Password2 = document.getElementById("Password2").value;

    if (Username2 == "" || Password2 == "") {

        alert("fields can't be blank")

    } 
    
    else {

        const getreq = new XMLHttpRequest();

        getreq.open('GET', 'http://localhost:3000/StdDetails');
        getreq.setRequestHeader('Content-Type', 'application/json');
        getreq.send();

        getreq.onreadystatechange = () => {
            if (getreq.readyState === XMLHttpRequest.DONE) {

                const Data = JSON.parse(getreq.response);

                let filUsername = [];
                let filPass = [];

                Data.forEach(element => {
                    filUsername.push(element.Username)
                    filPass.push(element.Password)

                })

                let index = filUsername.indexOf(Username2)

                if (filUsername.indexOf(Username2) == -1) {
                    alert("Invalid username")
                }

                else if (Password2 !== filPass[index]) { alert("Password doesn't match") }

                else {
                    window.open('http://127.0.0.1:5500/login.html', '_self')
                }


            }
        }
    }
}

function Logout() {

    window.open('http://127.0.0.1:5500/index.html', '_self')

}