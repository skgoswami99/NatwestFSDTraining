/*--- UI ---
    Additems.js is the UI here which contains are visible things to the users 
and UI handles and triggers actions like onClick, onSubmit etc.
    
    Actions are connected to UI using "import and connect". See
below.*/

import React from 'react'
import { connect } from 'react-redux';
import { addItem } from '../Redux/action';
import {v1 as uuidv1} from "uuid"

function AddItem(props) {

    const [text, setText] = React.useState('');

    function AddItemHandler()
    {
        console.log("Inside add item handler");
        const newItem = {
            id : uuidv1(),
            item:text
        }   
        console.log(newItem);
        props.addItem(newItem);
        console.log("Inside add item handler end ");
    }

    return (

        <div className="input-group mt-3">

            <input type="text" className="form-control" 
            placeholder="Enter Text" 
            onChange={(e) => setText(e.target.value)} />

            <button className="btn btn-outline-secondary" 
            type="button" onClick={AddItemHandler}>Click Here!!</button>

        </div>
    )
}

const mapstateToProps = (state) =>({
    todoList:state?.todoList
})
export default connect(mapstateToProps, {addItem}) (AddItem);