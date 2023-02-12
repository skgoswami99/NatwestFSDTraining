export function updateUserDetails(updatedUser : any)  {
    const currentUser = localStorage.getItem("userId");
    console.log("updated news value in", JSON.stringify(updatedUser))
    let token = localStorage.getItem('token') || '';
    return fetch("http://localhost:8765/UserProfileService//api/v1/userprofile/" + currentUser, {
            method: 'PUT',
			body: JSON.stringify(updatedUser),
			headers: {
                'Authorization': 'Bearer ' +token,
                'Content-Type': 'application/json' ,
                'Access-Control-Allow-Headers':"*",
                'Access-Control-Allow-Credentials':"true"}
		}).then(function (response) {
			return response.status;
		})
    }