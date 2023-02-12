import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import { FormControl, TextField, Button } from '@material-ui/core';
import User from '../../model/user';
import Register from '../register/Register'
import {login} from '../../service/loginService';
const useStyles = makeStyles(() => 
createStyles({
    root:{
        marginTop:80,
    }
}))


const Login = (porps:any) =>{
    const classes = useStyles();
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState('');

    const handleOnChange = (event:any) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        if(name === "username"){
        localStorage.setItem('userId',value);
            setUserName(value)
        }
        else{
            setPassword(value)
        }
    }
    
    const handleOnClick = () => {
        const user = new User(username,password);
        const auth = login(user);
        auth.then((data) => {
            porps.updateToken(data.token);
        })
    }
    return <div className = {classes.root} style={{display: 'flex', justifyContent: 'center'}}>
        <FormControl>
            <TextField placeholder = "User Name"
                        value = {username}
                        name = "username"
                        onChange = {handleOnChange}
                        required></TextField>
            <TextField placeholder = "Password"
                        type = "password"
                        value = {password}
                        name = "password"
                        onChange = {handleOnChange}
                        required></TextField>
            <Button id = 'login' onClick = {handleOnClick}>Login</Button>
            {/* <Register></Register> */}
        </FormControl>

    </div>
}

export default Login;