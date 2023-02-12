import NewsModel from '../../model/NewsModel';
import NewsSourceModel from '../../model/NewsSource';

export const fetchNews = async () => {
    let list: NewsModel[] = [];
    const currentUser = localStorage.getItem("userId");
    console.log("current user "+currentUser);
    let url = 'http://localhost:8765/NewsService/api/v1/news/' + currentUser;
    let token = localStorage.getItem('token') || '';
    const newsList = fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': "*",
            'Access-Control-Allow-Credentials': "true"
        }
    })
        .then(res => { 
            return res.clone().json(); })
        .then((data) => {
            if (data) {
                console.log("data "+data)
                data.forEach((element: any) => {
                    console.log("element "+JSON.stringify(element))
                        let news = new NewsModel(element.newsId, element.title, element.author,
                            element.urlToImage, element.description,
                            "source", element.publishedAt,
                            element.content, element.url);
                        list.push(news);
                    
                });
            }
            return list;
        }).catch(error => {
            console.log("error "+error)
            return Promise.reject(error);
        });
    return await newsList;

}