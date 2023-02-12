
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import NoteCard from '../card/NoteCard';
import { NewsService } from '../../service/Newsservice';
import News from '../../model/News';
import  { ReadNowService }  from '../../service/ReadNow.service';

const useStyles = makeStyles(() => 
  createStyles({
    footerStyle : {
      alignItems : 'center',
      marginTop:570,
      position:"relative",
    },
  }),
)

const ReadNow = () =>{
    const [news, setNews] = useState<News[]>([]);
    const newsList: News[] = [];
    const classes = useStyles();
    
    const newsData = ReadNowService();
    console.log("newsData before then", newsData);
    newsData.then((datas) => {
        return datas;
        console.log("datas before then", datas);
    }).then((newsCollection)=>{
        let tempList = [...newsCollection];
        if(news.length == 0){
            setNews(tempList);
        }

        return newsCollection;
    });
            

   

        const cardList = news.map((newsObj:News)=><NoteCard newsObj={newsObj}></NoteCard>);
    return <div id="readNow">
        {cardList}
        
        </div>
}

export default ReadNow;
