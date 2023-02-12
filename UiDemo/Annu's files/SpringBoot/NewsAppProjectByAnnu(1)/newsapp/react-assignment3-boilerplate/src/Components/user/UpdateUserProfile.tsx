import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { FormControl, TextField, Button } from '@material-ui/core';
import { registerService } from '../../service/RegisterService';
import { newuser } from '../../service/newuser';


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


export default function UpdateUserProfile(props: any) {

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    console.log("user object", JSON.stringify(props.userObj))
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [firstName, setFirstName] = useState(props.userObj.firstName);
    const [lastName, setLastName] = useState(props.userObj.lastName);
    const [contact, setContact] = useState(props.userObj.contact);
    const [email, setEmail] = useState(props.userObj.email);
    //const [disabled, setDisabled] = useState(true);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const onChangeUpdate = (event: any) => {

        event.preventDefault();
        console.log("checking. ######## ", event.target.value)
        if (event.target.name == 'firstname') {
            setFirstName(event.target.value);
        }
        if (event.target.name == 'lastname') {
            setLastName(event.target.value);
        }
        if (event.target.name == 'contact') {
            setContact(event.target.value);
        }
        if (event.target.name == 'email') {
            setEmail(event.target.value);
        }
        
    }

    let updatedUser = {
        "userId": props.userObj.username,
        "firstName": firstName,
        "lastName": lastName,
        "contact": contact,
        "email": email,
    };

    const handleOnClick = () => {
        console.log("onSubmission. ######## ", JSON.stringify(updatedUser))
        props.updateUserProMethod(updatedUser);

        handleClose();
    }

    return (
        <div>
            <Button style={{ backgroundColor: 'blue', color: 'white' }} variant="outlined" onClick={handleOpen} >
                Update Profile
            </Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">Update NewsSource</h2>
                    <label id="simple-modal-description">
                        FirstName
          </label><br />
                    <TextField style={{ border: '2px solid black' }} value={firstName}
                        name="firstname"
                        onChange={onChangeUpdate}
                    ></TextField><br />
                    <label id="simple-modal-description">
                         LastName
          </label><br />
                    <TextField style={{ border: '2px solid black' }} value={lastName}
                        name="lastname"
                        onChange={onChangeUpdate}
                    ></TextField>
                    <br/>
                    <label id="simple-modal-description">
                        Contact
          </label><br />
                    <TextField style={{ border: '2px solid black' }} value={contact}
                        name="contact"
                        onChange={onChangeUpdate}
                    ></TextField>
                    <br/>
                    <label id="simple-modal-description">
                        Email
          </label><br />
                    <TextField style={{ border: '2px solid black' }} value={email}
                        name="email"
                        onChange={onChangeUpdate}
                    ></TextField>
                    <br/>
                     <br/>
                    <Button style={{ color: 'blue' }} type="submit" onClick={handleOnClick}>Update</Button>
                </div>
            </Modal>
        </div>
    );

}