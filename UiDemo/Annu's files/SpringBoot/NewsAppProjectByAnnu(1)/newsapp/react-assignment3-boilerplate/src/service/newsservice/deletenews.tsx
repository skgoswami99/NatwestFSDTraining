import NewsModel from '../../model/NewsModel';
import NewsSourceModel from '../../model/NewsSource';

export  function deleteNews(newsId: Number) {
    const currentUser = localStorage.getItem("userId");
    console.log("Deleted News", newsId);
    let token = localStorage.getItem('token') || '';
    let url = "http://localhost:8765/NewsService/api/v1/news/"+currentUser+"/"+newsId;
    console.log("Deleted url", url);
    return fetch(url, {
        method: 'Delete',
        headers: {
            'Authorization': "Bearer " +token,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': "*",
            'Access-Control-Allow-Credentials': "true"
        },
    }).then(function (response) {
        console.log("After Deleting", response)
        if (response.status == 200) {
            alert("News Deleted Successfully");
        }
        return response.status;
    }).catch(function (error) {
        alert(error);
        return 404;
    })
}