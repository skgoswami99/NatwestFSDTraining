  import React, {useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { FormControl, TextField, Button } from '@material-ui/core';
import User from '../../model/user';
import {registerService} from '../../service/RegisterService';
import {newuser} from '../../service/newuser';


function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    }),
  );
  

export default function Register(props:any){

    const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(true);
  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onChangeUpdate = (event: any) => {

    event.preventDefault();
    console.log("checking. ######## ", event.target.value)
    if (event.target.name=='username'){
        setUsername(event.target.value);
      }
      if (event.target.name=='password'){
        setPassword(event.target.value);
      }
      if (event.target.name=='cpassword'){
        setCpassword(event.target.value);
      }
      if (event.target.name=='firstname'){
        setFirstName(event.target.value);
      }
      if (event.target.name=='lastname'){
        setLastName(event.target.value);
      }
      if (event.target.name=='email'){
        setEmail(event.target.value);
      }
      if (event.target.name=='contact'){
        setContact(event.target.value);
      }
    if(username && password){
        setDisabled(false);
    }
  }

  const onSubmission=()=> {
    if(username==""){
      alert("Username is Mandatory")
    }else if(password==""){
      alert("Password is Mandatory")
    } else if(password!=cpassword){
      alert("Password and Confirm Password Should be same")
    }else{
    console.log("onSubmission. ######## ")
    const user = new User(username,password);
        const auth = registerService(user,cpassword);
        
        const userUpdate = newuser(user,username,firstname,lastname,email,contact);
        // auth.then((data:any) => {
        //   console.log("onSubmission. ######## "+data.value)
        //     //props.updateToken(data.value);
        // })

        handleClose();
  }
}

    return (
    <div>
      <button type="button" style={{backgroundColor:'blue', color:'white'}} onClick={handleOpen}>
        Register
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">New User</h2>
          <label id="simple-modal-description">
            UserName
          </label><br/>
          <TextField  style={{border:'2px solid black'}} value = {username}
                        name = "username"
                        onChange = {onChangeUpdate}
                        ></TextField><br/>
            <label id="simple-modal-description">
            Password
          </label><br/>
          <TextField  style={{border:'2px solid black'}} value = {password}
                        name = "password" type = "password"
                        onChange = {onChangeUpdate}
                        ></TextField>
        <br/>
        <label id="simple-modal-description">
            cpassword
          </label><br/>
          <TextField  style={{border:'2px solid black'}} value = {cpassword}
                        name = "cpassword"
                        onChange = {onChangeUpdate}
                        ></TextField>
        <br/>
        <label id="simple-modal-description">
            FirstName
          </label><br/>
          <TextField  style={{border:'2px solid black'}} value = {firstname}
                        name = "firstname"
                        onChange = {onChangeUpdate}
                        ></TextField><br/>
            <label id="simple-modal-description">
            LastName
          </label><br/>
          <TextField  style={{border:'2px solid black'}} value = {lastname}
                        name = "lastname"
                        onChange = {onChangeUpdate}
                        ></TextField>
        <br/>
        <label id="simple-modal-description">
            Email
          </label><br/>
          <TextField  style={{border:'2px solid black'}} value = {email}
                        name = "email"
                        onChange = {onChangeUpdate}
                        ></TextField>
        <br/>
        <label id="simple-modal-description">
            Contact
          </label><br/>
          <TextField  style={{border:'2px solid black'}} value = {contact}
                        name = "contact"
                        onChange = {onChangeUpdate}
                        ></TextField><br/>
        <br/>
      <Button  disabled={disabled} style={{ color:'blue'}} type="submit" onClick={onSubmission}>Register</Button>
      </div>
      </Modal>
    </div>
    );

}
    