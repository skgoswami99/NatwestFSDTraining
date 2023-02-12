import News from '../model/News';
export const readLater = async (news:News) => {
    console.log("response.json() news",news);
    let url = 'http://localhost:3002/news'
    const response = await fetch(url,{
        method:'POST',
        headers : {
            'Content-Type': "application/json"
        },
        body:JSON.stringify(news)
    })
    //console.log("response.json() ",response.json());
    return response.json();
}
