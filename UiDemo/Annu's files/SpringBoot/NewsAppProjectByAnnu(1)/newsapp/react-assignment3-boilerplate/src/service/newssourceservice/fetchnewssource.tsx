import NewsSource from '../../model/NewsSource';

export const fetchNewsSource = async () => {
    let list: NewsSource[] = [];
    const currentUser = localStorage.getItem("userId");
    console.log("current user "+currentUser);
    let url = 'http://localhost:8765/NewsSourceService/api/v1/newssource/' + currentUser;
    let token = localStorage.getItem('token') || '';
    const newssourceList = fetch(url, {
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
                console.log("data newssource"+data)
                data.forEach((element: any) => {
                    
                        let newssource = new NewsSource(element.newsSourceId, element.newsSourceName, element.newsSourceDesc,
                            element.newsSourceCreatedBy,
                            element.newsSourceCreationDate);
                        list.push(newssource);
                    
                });
            }
            return Promise.resolve(list);
        }).catch(error => {
            console.log("error "+error)
            return Promise.reject(error);
        });
    return await newssourceList;

}