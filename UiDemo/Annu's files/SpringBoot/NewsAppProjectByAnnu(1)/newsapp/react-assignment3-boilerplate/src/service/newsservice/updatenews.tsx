export function updateNews(updatednews : any)  {
    const currentUser = localStorage.getItem("userId");
    console.log("updated news value ", JSON.stringify(updatednews))
    let token = localStorage.getItem('token') || '';
    return fetch("http://localhost:8765/NewsService/api/v1/news/"+currentUser+"/"+updatednews.newsId, {
            method: 'PUT',
			body: JSON.stringify(updatednews),
			headers: {
                'Authorization': 'Bearer ' +token,
                'Content-Type': 'application/json' ,
                'Access-Control-Allow-Headers':"*",
                'Access-Control-Allow-Credentials':"true"}
		}).then(function (response) {
			return response.status;
		})
    }