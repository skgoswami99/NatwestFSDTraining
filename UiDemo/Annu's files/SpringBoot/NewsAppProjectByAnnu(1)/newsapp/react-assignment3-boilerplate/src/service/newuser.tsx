import User from '../model/user';
export const newuser = async (user:any,username:any,firstname:any,lastname:any,email:any,contact:any) => {
    console.log("user "+user.password)
    let data= {
        "userId":user.username,
        "firstName":firstname,
        "lastName":lastname,
        "contact":contact,
        "email":email
    }
    console.log("username "+user.password)
    let url = 'http://localhost:8765/UserProfileService/api/v1/user/';
    console.log("url "+url)
    const response = await fetch(url,{
        method:'POST',
        headers : {
            'Content-Type': 'application/json',
    'Access-Control-Allow-Headers':'*',
    'Access-Control-Allow-Credentials':'true'
        },
        body:JSON.stringify(data)
    }).then(res=>[res,user.userId]).catch(error=>alert("usr already exist"));
    //console.log("response "+response)
    // if(response.ok){
    //     console.log("resolve ");
    // return await Promise.resolve;
    // }else{
    //     return await Promise.reject;
    // }
}
