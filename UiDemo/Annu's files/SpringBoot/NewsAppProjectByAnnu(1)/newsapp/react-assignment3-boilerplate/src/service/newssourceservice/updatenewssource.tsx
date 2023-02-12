export function updateNewsSource(updatednewssrc : any)  {
    const currentUser = localStorage.getItem("userId");
    console.log("updated news value ", JSON.stringify(updatednewssrc))
    let token = localStorage.getItem('token') || '';
    return fetch("http://localhost:8765/NewsSourceService/api/v1/newssource/"+updatednewssrc.newsSourceId, {
            method: 'PUT',
			body: JSON.stringify(updatednewssrc),
			headers: {
                'Authorization': 'Bearer ' +token,
                'Content-Type': 'application/json' ,
                'Access-Control-Allow-Headers':"*",
                'Access-Control-Allow-Credentials':"true"}
		}).then(function (response) {
			return response.status;
		})
    }