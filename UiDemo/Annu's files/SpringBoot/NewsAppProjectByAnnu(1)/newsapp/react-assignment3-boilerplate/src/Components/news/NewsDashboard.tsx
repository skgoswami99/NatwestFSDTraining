import React, { useState } from 'react';
import NoteCard from '../card/NoteCard';
import { NewsService } from '../../service/Newsservice';
import News from '../../model/News';
import { makeStyles, createStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Pagination from '../pagination/Pagination';
import { fetchNews } from '../../service/newsservice/fetchnews';
import DisplayNews from '../news/DisplayNews';
import Typography from '@material-ui/core/Typography';
import { deleteNews } from '../../service/newsservice/deletenews'
import { updateNews } from '../../service/newsservice/updatenews'

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            marginTop: 80,
        }
    }))


const NewsDashboard = (props: any) => {

    const [news, setNews] = useState<News[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    const newsList: News[] = [];
    const classes = useStyles();

    const updateNewsMethod = (param: any) => {

        console.log("updated news length" , JSON.stringify(param))
        updateNews(param).then(status => {
            if (status == 200) {
                fetchNews().then((newsList) => {
                    let tempList = [...newsList];
                        setNews(tempList);
                    return newsList;
                })
            }
        });
    }

    const deleteNewsMethod = (param: any) => {
        deleteNews(param).then(status => {
            if (status == 200) {
                fetchNews().then((newsList) => {
                    console.log("news length" , newsList.length)
                    let tempList = [...newsList];
                        setNews(tempList);
                    return newsList;
                })
            }
        });
    }

    const newsData = fetchNews();

    console.log("newsData before then", newsData);
    newsData.then((newsList) => {
        let tempList = [...newsList];
        if (news.length == 0) {
            setNews(tempList);
        }

        return newsList;
    });


    console.log("newsList", newsList);

    const postsPerPage = props.pageNumber;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = news.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
    const cardList = currentPosts.map((newsObj: News) => <DisplayNews newsObj={newsObj} daleteNews={deleteNewsMethod} updateNewsMethod={updateNewsMethod}></DisplayNews>);
    return (<div>
        <Typography style = {{textAlign:'center'}} gutterBottom variant="h5" component="h2">
            List of Added News
          </Typography><br /><br />
          <Grid sm={12} container direction="row" id="dashBoard">
        {cardList}
        {/* <Pagination postPerPage={postsPerPage} totalPosts={news.length} pagination={paginate} variant="outlined" shape="rounded" /> */}
    </Grid>
    </div>
    )
}
export default NewsDashboard;