import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { FormControl, TextField, Button } from '@material-ui/core';
import NewsSource from '../../model/NewsSource';
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


export default function UpdateNewsSource(props: any) {

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    console.log("newsObj", JSON.stringify(props.newsObj))
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [createdBy, setCreatedBy] = useState(props.newsSrcObj.newsSourceCreatedBy);
    const [source, setSource] = useState(props.newsSrcObj.newsSourceName);
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
        if (event.target.name == 'createdBy') {
            setCreatedBy(event.target.value);
        }
        if (event.target.name == 'source') {
            setSource(event.target.value);
        }
        
    }

    let updatedNews = {
        "newsSourceId": props.newsSrcObj.newsSourceId,
        "newsSourceName": source,
        "newsSourceCreatedBy": createdBy
    };

    const handleOnClick = () => {
        console.log("onSubmission. ######## ", JSON.stringify(updatedNews))
        props.updateNewsSrcMethod(updatedNews);

        handleClose();
    }

    return (
        <div>
            <Button style={{ backgroundColor: 'blue', color: 'white' }} variant="outlined" onClick={handleOpen} >
                Update NewsSrc
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
                        CreatedBy
          </label><br />
                    <TextField style={{ border: '2px solid black' }} value={createdBy}
                        name="createdBy"
                        onChange={onChangeUpdate}
                    ></TextField><br />
                    <label id="simple-modal-description">
                        News Source
          </label><br />
                    <TextField style={{ border: '2px solid black' }} value={source}
                        name="source"
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
