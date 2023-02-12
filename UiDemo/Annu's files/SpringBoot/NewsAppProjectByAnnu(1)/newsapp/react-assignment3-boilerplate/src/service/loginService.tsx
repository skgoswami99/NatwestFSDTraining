import User from '../model/user';
export const login = async (user:User) => {
    let loginUser ={
        'userId':user.username,
        'password':user.password
    }
    let url = 'http://localhost:8765/AuthenticationService/api/v1/auth/login'
    const response = await fetch(url,{
        method:'POST',
        headers : {
            'Content-Type': "application/json"
        },
        body:JSON.stringify(loginUser)
    })
    return await response.json();
}
