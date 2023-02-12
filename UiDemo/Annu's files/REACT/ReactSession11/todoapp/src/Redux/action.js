/*--- Actions ---
     Actions are defined on this page which is binded to UI using 
"import and connect". Actions send the UI actions to reducer for 
processing.
     Actions and Reducer are connected using type. Action is returning 
a type which is imported by reducer for further updation of state in 
store.*/

import { GET_ITEMS, REMOVE_ITEM, ADD_ITEM } from "./type";


export function getItems()
{
    return {
        type:GET_ITEMS
    }
}

export function deleteItem(id)
{
    return {
        type:REMOVE_ITEM,
        payload: id
    }
}

export function addItem(item)
{
    console.log("Inside start of additem Mentod");
    return {
        type: ADD_ITEM,
        payload: item
    }
}