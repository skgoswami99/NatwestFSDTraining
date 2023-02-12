import React, { useState } from 'react';
import NoteCard from '../card/NoteCard';
import { NewsService } from '../../service/Newsservice';
import NewsSource from '../../model/NewsSource';
import { makeStyles, createStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Pagination from '../pagination/Pagination';
import { fetchNewsSource } from '../../service/newssourceservice/fetchnewssource';
import DisplayNewsSource from '../newssource/DisplayNewsSource';
import Typography from '@material-ui/core/Typography';
import { deleteNewsSource } from '../../service/newssourceservice/deletenewssource';
import { updateNewsSource } from '../../service/newssourceservice/updatenewssource'

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            marginTop: 80,
        }
    }))


const NewsSourceDashboard = (props: any) => {

    const [newsSource, setNewsSource] = useState<NewsSource[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    console.log("in NewsSourceDashboard")
    const newsSourceList: NewsSource[] = [];
    const classes = useStyles();

    const updateNewsSrcMethod = (param: any) => {

        console.log("updated news length" , JSON.stringify(param))
        updateNewsSource(param).then(status => {
            if (status == 200) {
                fetchNewsSource().then((newsSourceList) => {
                    let tempList = [...newsSourceList];
                    setNewsSource(tempList);
                    return newsSourceList;
                })
            }
        });
    }

    const deleteNewsSourceMethod = (param: any) => {
        console.log("param" , param)
        deleteNewsSource(param).then(status => {
            if (status == 200) {
                fetchNewsSource().then((newsSourceList) => {
                    console.log("news source length" , newsSourceList.length)
                    let tempList = [...newsSourceList];
                    setNewsSource(tempList);
                    return newsSourceList;
                })
            }
        });
    }

    const newsSourceData = fetchNewsSource();

    console.log("newssouceData before then", newsSourceData);
    newsSourceData.then((newsSourceList) => {
        let tempList = [...newsSourceList];
        if (newsSource.length == 0) {
            setNewsSource(tempList);
        }

        return newsSourceList;
    });
    const postsPerPage = props.pageNumber;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = newsSource.slice(indexOfFirstPost, indexOfLastPost);
    console.log("currentPosts ",currentPosts.length);
    console.log("currentPosts ",JSON.stringify(newsSource));
    const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
    const cardList = currentPosts.map((newssrcObj: NewsSource) => <DisplayNewsSource newssrcObj={newssrcObj} daleteNewsSource={deleteNewsSourceMethod} updateNewsSrcMethod={updateNewsSrcMethod}></DisplayNewsSource>);
    return (<div>
        <Typography style = {{textAlign:'center'}} gutterBottom variant="h5" component="h2">
            List of Added News Source
          </Typography><br /><br />
          <Grid sm={12} container direction="row" id="dashBoard">
        {cardList}
        {/* <Pagination postPerPage={postsPerPage} totalPosts={newsSource.length} pagination={paginate} variant="outlined" shape="rounded" /> */}
        </Grid>
        </div>
    )
}
export default NewsSourceDashboard;