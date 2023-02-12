import React , {useState} from 'react';
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
import { fetchUserProfile } from '../../service/userprofile/fetchUserDetails';
import UserProfile from '../../model/UserProfile';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import UpdateUserProfile from '../user/UpdateUserProfile'

const useStyles = makeStyles({
  table: {
   // minWidth: 100,
  },
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



const DisplayProfile = (props: any) => {
  const classes = useStyles();
  console.log("props"+JSON.stringify(props.userObj))
  let value;
  if(props.userObj.username==undefined){
    value=props.userObj.userId
  }else{
    value= props.userObj.username
  }
   
  return (<TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        
        <TableBody>
          
            <TableRow>
              <TableCell component="th">
                UserId
              </TableCell>
              <TableCell>{value}</TableCell>        
            </TableRow>
            <TableRow>
              <TableCell component="th">
                FirstName
              </TableCell>
              <TableCell>{props.userObj.firstName}</TableCell>        
            </TableRow>
            <TableRow>
              <TableCell component="th">
                LastName
              </TableCell>
              <TableCell>{props.userObj.lastName}</TableCell>        
            </TableRow>
            <TableRow>
              <TableCell component="th">
                Email
              </TableCell>
              <TableCell>{props.userObj.email}</TableCell>        
            </TableRow>
            <TableRow>
              <TableCell component="th">
                Contact
              </TableCell>
              <TableCell>{props.userObj.contact}</TableCell>        
            </TableRow>
          
        </TableBody>
      </Table>
    
        
       <UpdateUserProfile userObj = {props.userObj} updateUserProMethod={props.updateUserProMethod}> </UpdateUserProfile>
       </TableContainer>)
}

export default DisplayProfile;
