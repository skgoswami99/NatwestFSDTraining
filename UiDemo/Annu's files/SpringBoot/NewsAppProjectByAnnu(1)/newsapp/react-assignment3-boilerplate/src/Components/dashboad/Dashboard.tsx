import React, { useState } from 'react';
import NoteCard from '../card/NoteCard';
import { NewsService } from '../../service/Newsservice';
import News from '../../model/News';
import { makeStyles, createStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Pagination from '../pagination/Pagination';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            marginTop: 80,
        }
    }))


const Dashboard = (props:any) => {

    const [news, setNews] = useState<News[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    
    const newsList: News[] = [];
    const classes = useStyles();
    
    const newsData = NewsService(props.url);
    
    console.log("newsData before then", newsData);
    newsData.then((newsList) => {
            let tempList = [...newsList];
            if(news.length == 0){
                setNews(tempList);
            }

            return newsList;
        });
        const postsPerPage=props.pageNumber;

        const indexOfLastPost =currentPage*postsPerPage;
        const indexOfFirstPost =indexOfLastPost-postsPerPage;
        const currentPosts = news.slice(indexOfFirstPost,indexOfLastPost);

        const paginate=(pageNumber:any)=> setCurrentPage(pageNumber);
        const cardList = currentPosts.map((newsObj:News)=><NoteCard newsObj={newsObj}></NoteCard>);
    return (<Grid sm={12} container direction="row" id="dashBoard">
    {cardList} 
    <Pagination postPerPage={postsPerPage} totalPosts={news.length} pagination={paginate} variant="outlined" shape="rounded" />
     
        
        </Grid>
    )
}
export default Dashboard;