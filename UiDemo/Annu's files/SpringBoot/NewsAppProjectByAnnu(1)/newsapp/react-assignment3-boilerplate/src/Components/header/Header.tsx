

import React from 'react';
import Filter from '../filter/Filter'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Register from '../register/Register';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);


const Header = (props:any) =>{
  const classes = useStyles();


  const currentUser = localStorage.getItem("userId");

const register=()=>{
  console.log("in currentUser props.token", currentUser)
  if(currentUser==undefined){
    return <div>
      <p style = {{color:'black',textAlign:'right'}}>If You Are New User, Click On Register</p>
<Register></Register></div>
  }

}
  const buttons=()=>{
    console.log("in heasderbuttons props.token", props.token)
    
      if(props.token){
    console.log("in heasderbuttons")
    
        return <div> 
                <button onClick={()=>handleOnClick("dashboard")}>Dashboard</button>
                <button onClick={()=>handleOnClick("readnow")}>ReadNow</button>
                <button onClick={()=>handleOnClick("news")}>News</button>
                <button onClick={()=>handleOnClick("newssource")}>News Source</button>
                <Filter updateUrl={props.updateUrl} updatePageNumber={props.updatePageNumber}></Filter>
                <h5 onClick={()=>handleOnClick("userprofile")} style = {{color:'black', textDecorationLine:'Underline',textAlign:'right'}}>Logged in as {currentUser}</h5>
                <h5 onClick={logout} style = {{color:'black', textDecorationLine:'Underline',textAlign:'right'}}>LOGOUT</h5>
                
                </div>
      }
  }
  const logout = () => {
    localStorage.clear();
    window.location.href='/';
}
  const handleOnClick = (str: string) => {
     props.updatePage(str);
}

    return (
<div className={classes.root}>
<AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      News Manager
    </Typography>
    {register()}    
    {buttons()}
  </Toolbar>
</AppBar>
</div>
      );
}

export default Header;
