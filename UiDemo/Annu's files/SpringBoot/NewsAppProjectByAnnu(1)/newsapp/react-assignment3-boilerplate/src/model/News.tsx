export default class News{
    id : number;
    urlToImage : string;
    title : string;
    author : string
    constructor(urlToImage:string,title:string,author:string){
        this.id = Math.random()*1000;
        this.title = title;
        this.author = author;
        this.urlToImage = urlToImage;
    }
}
