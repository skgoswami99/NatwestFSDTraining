import NewsModel from '../../model/NewsModel';
import NewsSourceModel from '../../model/NewsSource';

export  function deleteNewsSource(newsSrcId: Number) {
    const currentUser = localStorage.getItem("userId");
    console.log("Deleted News", newsSrcId);
    let token = localStorage.getItem('token') || '';
    let url = "http://localhost:8765/NewsSourceService/api/v1/newssource/"+newsSrcId;
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
        if (response.status == 200) {
            alert("News Source Deleted Successfully");
        }
        return response.status;
    }).catch(function (error) {
        alert(error);
        //return 404;
    })
}