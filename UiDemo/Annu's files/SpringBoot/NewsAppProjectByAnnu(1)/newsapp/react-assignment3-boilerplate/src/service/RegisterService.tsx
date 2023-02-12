import User from '../model/user';
export const registerService = async (user:User,cpassword:any) => {
    console.log("user "+user.password)
    let data= {
        "userId":user.username,
        "password":user.password,
        "cpassword":cpassword
    }
    console.log("username "+user.password)
    let url = 'http://localhost:8765/AuthenticationService/api/v1/auth/register';
    console.log("url "+url)
    const response = await fetch(url,{
        method:'POST',
        headers : {
            'Content-Type': 'application/json',
    'Access-Control-Allow-Headers':'*',
    'Access-Control-Allow-Credentials':'true'
        },
        body:JSON.stringify(data)
    }).then(res=>{console.log("res.status "+res.status)
        if (res.status == 201) {
        alert("New User Created");
    }
    if (res.status == 409) {
        alert("User Already Exist");
    }}).catch(error=>alert("usr already exist"));
    //console.log("response "+response)
    // if(response.ok){
    //     console.log("resolve ");
    // return await Promise.resolve;
    // }else{
    //     return await Promise.reject;
    // }
}
