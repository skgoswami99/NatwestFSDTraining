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
import DisplayProfile from './DisplayProfile';
import {updateUserDetails} from '../../service/userprofile/updateUserDetails';

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



const DisplayUserProfile = (props: any) => {
  const classes = useStyles();
  const [user, setUserObj] = useState<UserProfile>();

  const [currentPage, setCurrentPage] = useState(0);
  //console.log("user source id", props.newssrcObj.id);
  //const userList: UserProfile ;

  const updateUserProMethod = (param: any) => {

    console.log("updated profile length" , JSON.stringify(param))
    updateUserDetails(param).then(status => {
      console.log("param" , JSON.stringify(param))
        if (status == 200) {
          console.log("status" , JSON.stringify(status))
          setUserObj(param);
          // userProfileData.then((userList) => {
          //  // let tempObj = userList;
          //   console.log("status tempObj" , JSON.stringify(userList))
          //       setUserObj(userList);
          //   })
        }
    });
}

  const userProfileData = fetchUserProfile();

  
  userProfileData.then((userList) => {
     // let tempObj = userList;
     console.log("user value userList if"+JSON.stringify(userList))
      if (user===undefined) {
        console.log("user value inside if ")
          setUserObj(userList);
      }

      return user;
  });
  console.log("user value outside if"+JSON.stringify(user))


  const postsPerPage = props.pageNumber;

    console.log("currentPosts ",JSON.stringify(user));
    const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
    let cardList;
    if(user!=undefined){
     cardList = <DisplayProfile userObj={user} updateUserProMethod={updateUserProMethod}></DisplayProfile>;
    }
  return (<div>
    {cardList}
  </div>)
}

export default DisplayUserProfile;
