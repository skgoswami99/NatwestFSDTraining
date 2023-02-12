export default class NewsModel {
    id: number; 
    title: string; 
    author: string;
    description: string; 
    publishedAt: Date; 
    content: string; 
    url: string; 
    urlToImage: string; 
    source : string;

    constructor(id: number, title: string, author: string, urlToImage: string, 
        description: string, source: string, publishedAt: Date, content: string, url: string) { 
            this.id = id; 
            this.title = title; 
            this.author = author; 
            this.description = description; 
            this.publishedAt = publishedAt; 
            this.content = content; 
            this.url = url; 
            this.urlToImage = urlToImage; 
            this.source = source;    
        }
    }