import UserProfile from '../../model/UserProfile';

export const fetchUserProfile = async () => {
    let user: UserProfile;
    const currentUser = localStorage.getItem("userId");
    console.log("current user "+currentUser);
    let url = 'http://localhost:8765/UserProfileService//api/v1/userprofile/' + currentUser;
    let token = localStorage.getItem('token') || '';
    const userList = fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': "*",
            'Access-Control-Allow-Credentials': "true"
        }
    })
        .then(res => { 
            return res.json(); })
        .then((data) => {
            if (data) {
                console.log("data "+JSON.stringify(data))
                
                         user = new UserProfile(data.userId, data.firstName, data.lastName,
                            data.contact, data.email);
                      // list.push(news);                    
            }
            console.log("user data "+JSON.stringify(user))
            return user;
            
        }).catch(error => {
            console.log("error "+error)
            return Promise.reject(error);
        });
    return await userList;

}