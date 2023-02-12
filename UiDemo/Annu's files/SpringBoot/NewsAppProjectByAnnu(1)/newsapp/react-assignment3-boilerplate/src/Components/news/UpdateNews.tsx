import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { FormControl, TextField, Button } from '@material-ui/core';
import News from '../../model/News';
import { registerService } from '../../service/RegisterService';
import { newuser } from '../../service/newuser';
import { AnySoaRecord } from 'dns';


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


export default function UpdateNews(props: any) {

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    console.log("newsObj", JSON.stringify(props.newsObj))
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState(props.newsObj.title);
    const [author, setAuthor] = useState(props.newsObj.author);
    const [desc, setDesc] = useState(props.newsObj.description);
    const [content, setContent] = useState(props.newsObj.content);
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
        if (event.target.name == 'title') {
            setTitle(event.target.value);
        }
        if (event.target.name == 'author') {
            setAuthor(event.target.value);
        }
        if (event.target.name == 'desc') {
            setDesc(event.target.value);
        }
                if (event.target.name == 'content') {
            setContent(event.target.value);
        }

    }

    let updatedNews = {
        "newsId": props.newsObj.id,
        "title": title,
        "author": author,
        "description": desc,
        "publishedAt": props.newsObj.publishedAt,
        "content": content,
        "url": props.newsObj.url,
        "urlToImage": props.newsObj.urlToImage,
        "newsSource": {
            "newsSourceId": props.newsObj.id,
            "newsSourceName": props.newsObj.source
        }
    };

    const handleOnClick = () => {
        console.log("onSubmission. ######## ", JSON.stringify(updatedNews))
        props.updateNewsMethod(updatedNews);

        handleClose();
    }

    return (
        <div>
            <Button style={{ backgroundColor: 'blue', color: 'white' }} variant="outlined" onClick={handleOpen} >
                Update News
            </Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">Update News</h2>
                    <label id="simple-modal-description">
                        Title
          </label><br />
                    <TextField style={{ border: '2px solid black' }} value={title}
                        name="title"
                        onChange={onChangeUpdate}
                    ></TextField><br />
                    <label id="simple-modal-description">
                        Author
          </label><br />
                    <TextField style={{ border: '2px solid black' }} value={author}
                        name="author"
                        onChange={onChangeUpdate}
                    ></TextField>
                    <br />
                    <label id="simple-modal-description">
                        Description
          </label><br />
                    <TextField style={{ border: '2px solid black' }} value={desc}
                        name="desc"
                        onChange={onChangeUpdate}
                    ></TextField>
                    <br />
        <label id="simple-modal-description">
                        Content
          </label><br />
                    <TextField style={{ border: '2px solid black' }} value={content}
                        name="content"
                        onChange={onChangeUpdate}
                    ></TextField>
                    <br />

                    <Button style={{ color: 'blue' }} type="submit" onClick={handleOnClick}>Update</Button>
                </div>
            </Modal>
        </div>
    );

}
