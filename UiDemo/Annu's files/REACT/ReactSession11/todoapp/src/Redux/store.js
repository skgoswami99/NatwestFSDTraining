/*--- Redux Architecture ---
    Store is the first component of the redux architecture which 
contains state (initital State) of all the components. States defines UI.*/

import {createStore} from "redux";
import reducer from "./reducer";
export const initialState = {
    todoList: [
        {
            id: '1', 
            item: 'Java Meeting'
        },
        {
            id: '2', 
            item: 'Dotnet Meeting'
        },
        {
            id: '3', 
            item: 'Mean Meeting'
        }
    ]
}

const store = createStore(reducer, initialState);
export default store;