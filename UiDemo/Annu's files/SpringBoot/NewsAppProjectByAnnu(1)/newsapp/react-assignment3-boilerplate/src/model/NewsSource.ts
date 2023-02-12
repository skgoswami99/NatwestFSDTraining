
export default class NewsSource{
    newsSourceId: number;
    newsSourceName  : string;
    newsSourceDesc  : string;
    newsSourceCreatedBy  : string;
    newsSourceCreationDate  : Date;
    constructor(newsSourceId:number,newsSourceName:string,newsSourceDesc:string,newsSourceCreatedBy:string,
        newsSourceCreationDate:Date){
        this.newsSourceId = newsSourceId;
        this.newsSourceName = newsSourceName;
        this.newsSourceCreatedBy = newsSourceCreatedBy;
        this.newsSourceDesc = newsSourceDesc;
        this.newsSourceCreationDate = newsSourceCreationDate;
    }
}