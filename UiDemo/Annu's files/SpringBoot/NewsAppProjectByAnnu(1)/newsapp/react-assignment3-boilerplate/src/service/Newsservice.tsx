import React from 'react';
import News from '../model/News'

export const NewsService = async (url:string) =>{
      const newsList: News[] = [];
      const result = await fetch(url).then((res)=>
      {
            if(res.status==200){
                  return Promise.resolve(res.json());
            }else{
                  return Promise.reject("News Url does not exist");
            }
      })
      .then((data) => {
            if(data.articles){
                  Array.prototype.forEach.call((data.articles), (element: News) => {
                        newsList.push(new News(element.urlToImage, element.title, element.author));
                    });
                   
            }else{
                  
                  Array.prototype.forEach.call((data.sources), (element: any) => {
                        newsList.push(new News(element.url, element.id, element.name));
                    });
            }
            return newsList;
      }).catch((error) => {
            throw new Error(error);
      })
      return result;
}
