import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { FormControl, TextField, Button } from '@material-ui/core';


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

export default function Filter(props: any) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState('Select');
  const [endPoint, setEndPoint] = useState('');
  const [category, setCategory] = useState('Select');
  const [searchText, setSearchText] = useState('');
  const [disabled, setDisabled] = useState(false);
  
 // const [pageNumber, setPageNumber] = useState(3);
  
//  const [url, setUrl] = useState('');
let pNum=20;
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeUpdate = (event: any) => {
    event.preventDefault();
    console.log("checking. ######## ", event.target.value)
    if (event.target.value == '/v2/top-headlines' || event.target.value == '/v2/everything' || event.target.value == '/v2/Sources') {
      if(event.target.value=='/v2/Sources' || event.target.value == '/v2/everything'){
        setDisabled(true);
        setCountry("Select");
        setCategory("Select");
      }else{
        setDisabled(false);
      }
      setEndPoint(event.target.value);
    } else if (event.target.value == 'business' || event.target.value == 'entertainment' || event.target.value == 'general'
      || event.target.value == 'health' || event.target.value == 'science' || event.target.value == 'sports' || event.target.value == 'technology') {
      setCategory(event.target.value);
    }else if(event.target.name=='searchText'){
      setSearchText(event.target.value);

    }
    else if(event.target.name=='pageNumber'){
      pNum = (event.target.value)
      console.log("pNum " + pNum);
    }
    else{
      setCountry(event.target.value);
    }
  
    //props.updateUrl(url);
  }
  const onSubmission=()=> {
    let str = 'https://newsapi.org'+endPoint+'?';
    if(country && country!='Select'){
        str  = str + 'country='+country+'&';
    }
    if(category && category!='Select'){
      str  = str + 'category='+category+'&';
    }
    if(searchText && searchText.trim()!=''){
      str = str + 'q='+searchText+'&';
    }
      str = str + 'apikey=1fc0a77bf2bd494db21842f0a66d75bb';
      // if(pNum!=0){
      //   str  = str + '&pagesize='+pNum;
      // }
    
    console.log("url " , str);
    props.updateUrl(str);
    props.updatePageNumber(pNum);
    handleClose();
    
  }
  console.log("country " + country);
  console.log("endPoint " + endPoint);
  console.log("category " + category);
  console.log("pageNumber " + pNum);
  const validatePageNumber = (event:any) =>{
    if(event.target.value<20){
      event.target.value=20;
    }else if(event.target.value>100){
      event.target.value=100;
    }
  }
  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Filters
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 style={{backgroundColor:'cadetblue'}} id="simple-modal-title">News Filters</h2>
          <label id="simple-modal-description">
            EndPoints
          </label><br/>
          <select id="selEnd" onChange={onChangeUpdate}>
            <option selected value="SelectEnd">Select</option>
            <option value="/v2/top-headlines">TopHead</option>
            <option value="/v2/everything">Everything</option>
            <option value="/v2/Sources">Sources</option>
          </select><br/>
          <label id="simple-modal-description">
            Country
          </label><br/>
          <select onChange={onChangeUpdate} disabled={disabled} value={country}>
            <option value="SelectCountry">Select</option>
            <option >ae</option>
            <option >ar</option>
            <option >at</option>
            <option >au</option>
            <option >be</option>
            <option >bg</option>
            <option >br</option>
            <option >ca</option>
            <option >ch</option>
            <option >cn</option>
            <option >co</option>
            <option >cu</option>
            <option >cz</option>
            <option >de</option>
            <option >eg</option>
            <option >fr</option>
            <option >gb</option>
            <option >gr</option>
            <option >hk</option>
            <option >hu</option>
            <option >id</option>
            <option >ie</option>
            <option >il</option>
            <option >in</option>
            <option >it</option>
            <option >jp</option>
            <option >kr</option>
            <option >lt</option>
            <option >lv</option>
            <option >ma</option>
            <option >mx</option>
            <option >my</option>
            <option >ng</option>
            <option >nl</option>
            <option >no</option>
            <option >nz</option>
            <option >ph</option>
            <option >pl</option>
            <option >pt</option>
            <option >ro</option>
            <option >rs</option>
            <option >ru</option>
            <option >sa</option>
            <option >se</option>
            <option >sg</option>
            <option >si</option>
            <option >sk</option>
            <option >th</option>
            <option >tr</option>
            <option >ua</option>
            <option >us</option>
            <option >ve</option>
            <option >za</option>
          </select><br/>
          <label id="simple-modal-description">
            Category
          </label><br/>
          <select disabled={disabled} onChange={onChangeUpdate} value={category}>
            <option value="SelectCat">Select</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="general">General</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select><br/><br/>
          <label id="simple-modal-description">
            q
          </label><br/>
          <TextField  style={{border:'2px solid black'}} value = {searchText}
                        name = "searchText"
                        onChange = {onChangeUpdate}
                        ></TextField><br/>
          <label id="simple-modal-description">
            Pagesize
          </label><br/>
          <TextField  inputProps={{min:20,max:100,step:1}}
                        name = "pageNumber" defaultValue="20" variant="outlined" type="number"
                        onBlur={validatePageNumber}
                        onChange = {onChangeUpdate}
                        ></TextField><br/>            
                        
                        
                        <br/><br/>

          <button style= {{color:'blue'}} type="submit" color="primary" onClick={onSubmission}>Apply Filter</button>
        </div>
      </Modal>
    </div>
  );
}