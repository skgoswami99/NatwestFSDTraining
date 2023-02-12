import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { readLater } from '../../service/ReadLater.service'
import { Container, Row, Col } from 'reactstrap';
import UpdateNews from './UpdateNews';

const useStyles = makeStyles({
  root: {
    margin : "auto",
    maxWidth: "20rem",
    display:'flex',
    flexDirection:'row',

  },
  media: {
    height: 140,
    maxWidth: "20rem",

    display:'flex',
    flexDirection:'row',
  },
});



const DisplayNews = (props: any) => {
  const classes = useStyles();
  console.log("Deleted id", props.newsObj.id);
  return <Grid item sm={4} container direction="row">

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.newsObj.urlToImage}
          title={props.newsObj.title}
        />
        <CardContent>
          <Typography id = "author" gutterBottom variant="h5" component="h2">
            Author : {props.newsObj.author}
          </Typography>
          <Typography id = "title" variant="body2" color="textSecondary" component="p">
            Title : {props.newsObj.title}
          </Typography>
        </CardContent>
        <CardActions>
       
  <Button  style= {{backgroundColor:'blue', color:'white'}} variant="outlined" onClick = {()=>props.daleteNews(props.newsObj.id)} >
          Delete News
  </Button>
  <UpdateNews newsObj={props.newsObj} updateNewsMethod={props.updateNewsMethod}></UpdateNews>
      </CardActions>
      </CardActionArea>
     
    </Card>

  </Grid>
}

export default DisplayNews;
