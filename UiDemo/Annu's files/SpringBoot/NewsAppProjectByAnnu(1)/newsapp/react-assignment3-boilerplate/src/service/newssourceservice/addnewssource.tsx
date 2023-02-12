import NewsModel from '../../model/NewsModel';
import NewsSourceModel from '../../model/NewsSource';

export function addNewsSource(news: NewsModel) {
    const currentUser = localStorage.getItem("userId");
    console.log("In add news source to db", currentUser);
    console.log("In add news source to db", JSON.stringify(news));
    let newsSourceObj = {
        "newsSourceId": news.id,
        "newsSourceName": news.title,
        "newsSourceDesc": news.description,
        "newsSourceCreatedBy": currentUser,
        "newsSourceCreationDate":""
    };
    let token = localStorage.getItem('token') || '';
    return fetch("http://localhost:8765/NewsSourceService/api/v1/newssource", {
        method: 'POST',
        headers: {
            'Authorization': "Bearer " +token,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': "*",
            'Access-Control-Allow-Credentials': "true"
        },
        body: JSON.stringify(newsSourceObj)
    }).then(function (response) {
        console.log("in add news to db", response);
        if (response.status == 201) {
            alert("News Source Added Successfully");
        }else{
            Promise.prototype.catch();
         }
        //return response.status;
    }).catch(function (error) {
        alert("News Source Already Exist");
    })
}