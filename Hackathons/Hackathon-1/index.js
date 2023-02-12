function register(event) {
    event.preventDefault()

    let Email1 = document.getElementById("Email1").value;
    let FirstName = document.getElementById("FirstName").value;
    let LastName = document.getElementById("LastName").value;
    
    let Address = document.getElementById("Address").value;
    let AcctNumber = document.getElementById("AcctNumber").value;
    let MobNumber = document.getElementById("MobNumber").value;
    let Password1 = document.getElementById("Password1").value;
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let mobFormat = /^[0-9]{10}$/;
    let pwdFormat = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{6,14}$/;


    const DB =
    {
        "Email": Email1,
        "First Name": FirstName,
        "Last Name": LastName,
        "Address": Address,
        "Account Number": AcctNumber,
        "Mobile Number": MobNumber,
        "Password": Password1
    }

    if (Email1 == "" || FirstName == "" || LastName == "" || Address == "" || AcctNumber == ""
        || MobNumber == "" || Password1 == "") {
        alert("fields can't be left blank")
    }

    if (!Email1.match(mailFormat)) {
        alert("Invalid email format")

    }

    else if (!Password1.match(pwdFormat)) {
        alert("password must be as per criteria below")
    }

    else if (!MobNumber.match(mobFormat)) {
        alert("Mobile Number should be of 10 digits only")
    }

    else {

        const Getrequest = new XMLHttpRequest();
        Getrequest.open('GET', 'http://localhost:3000/CustDetails');
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

                    postreq.open('POST', 'http://localhost:3000/CustDetails');
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

    let loginEmail = document.getElementById("loginEmail").value;
    let Password2 = document.getElementById("Password2").value;

    if (loginEmail == "" || Password2 == "") {

        alert("fields can't be blank")

    } 
    
    else {

        const getreq = new XMLHttpRequest();

        getreq.open('GET', 'http://localhost:3000/CustDetails');
        getreq.setRequestHeader('Content-Type', 'application/json');
        getreq.send();

        getreq.onreadystatechange = () => {
            if (getreq.readyState === XMLHttpRequest.DONE) {

                const Data = JSON.parse(getreq.response);

                let filtEmail = [];
                let filtPass = [];

                Data.forEach(element => {
                    filtEmail.push(element.Email)
                    filtPass.push(element.Password)

                })

                let index = filtEmail.indexOf(loginEmail)

                if (filtEmail.indexOf(loginEmail) == -1) {
                    alert("Email not registered")
                }

                else if (Password2 !== filtPass[index]) { alert("Password doesn't match") }

                else {
                    window.open('http://127.0.0.1:5500/home.html', '_self')
                }


            }
        }
    }
}

function Logout() {

    window.open('http://127.0.0.1:5500/index.html', '_self')
    alert("Are you Sure you want to logout !!")

}