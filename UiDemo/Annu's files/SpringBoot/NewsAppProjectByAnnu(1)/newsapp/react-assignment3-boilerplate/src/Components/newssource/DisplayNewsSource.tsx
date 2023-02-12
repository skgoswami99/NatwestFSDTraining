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
import UpdateNewsSource from './UpdateNewsSource';

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



const DisplayNewsSource = (props: any) => {
  const classes = useStyles();
  console.log("Deleted source id", props.newssrcObj.id);
  return <Grid item sm={4} container direction="row">

    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography id = "author" gutterBottom variant="h5" component="h2">
            CreatedBy : {props.newssrcObj.newsSourceCreatedBy}
          </Typography>
          <Typography id = "title" variant="body2" color="textSecondary" component="p">
            News Source : {props.newssrcObj.newsSourceName}
          </Typography>
        </CardContent>
        <CardActions>
       <UpdateNewsSource newsSrcObj = {props.newssrcObj} updateNewsSrcMethod={props.updateNewsSrcMethod}> </UpdateNewsSource>
  <Button  style= {{backgroundColor:'blue', color:'white'}} variant="outlined" onClick = {()=>props.daleteNewsSource(props.newssrcObj.newsSourceId)} >
          Delete NewsSrc
  </Button>
      </CardActions>
      </CardActionArea>
     
    </Card>

  </Grid>
}

export default DisplayNewsSource;
