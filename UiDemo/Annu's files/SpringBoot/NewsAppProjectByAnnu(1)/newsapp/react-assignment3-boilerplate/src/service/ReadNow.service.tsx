import React from 'react';
import News from '../model/News'

export const ReadNowService = async () =>{
    const returnList : News[] =[];
      const result = await fetch('http://localhost:3002/news').then((res)=>
      {
           
                  return res.json();
      })
      .then((data: News[]) => {
            data.forEach((obj:News)=>{
                  console.log("obj "+obj.author);
                  returnList.push(obj);
            })
            return returnList;
      })
      return result;
}