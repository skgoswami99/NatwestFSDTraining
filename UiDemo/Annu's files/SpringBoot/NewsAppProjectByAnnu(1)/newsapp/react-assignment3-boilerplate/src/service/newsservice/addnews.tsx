import NewsModel from '../../model/NewsModel';
import NewsSourceModel from '../../model/NewsSource';

export function addNews(news: NewsModel) {
    const currentUser = localStorage.getItem("userId");
    console.log("news id", news.id);
    let newsObj = {
        "newsId": news.id,
        "title": news.title,
        "author": currentUser,
        "description": news.description,
        "publishedAt": news.publishedAt,
        "content": news.content,
        "url": news.url,
        "urlToImage": news.urlToImage,
        "newsSource": {
            "newsSourceId": news.id,
            "newsSourceName": news.source
        }
    };
    let token = localStorage.getItem('token') || '';
    return fetch("http://localhost:8765/NewsService/api/v1/news", {
        method: 'POST',
        headers: {
            'Authorization': "Bearer " +token,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': "*",
            'Access-Control-Allow-Credentials': "true"
        },
        body: JSON.stringify(newsObj)
    }).then(function (response) {
        console.log(" add news response", response);
        if (response.status == 201) {
            alert("News Added Successfully");
        }else{
           Promise.prototype.catch();
            
        }
        //return response.status;
    }).catch(function (error) {
        alert("News Already Exist");
    })
}