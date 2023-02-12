const state = {
    items:[1,2,3]
};

// Create Reducer

function Reducer(initialstate = state, action)
{
    switch(action.type)
    {
        case "GET":
            {
                return initialstate;
            }
        case "ADD":
            {
            
            initialstate.items.push(action.payload);
            return initialstate;        
            }
        case "REMOVE":
            {
            initialstate.items.splice(initialstate.items.indexOf(action.payload),1);
            return initialstate;        
            }
        case "REMOVEALL":
            {
            initialstate.items.splice(0,initialstate.items.length);
            return initialstate;        
            }
    }
}

// Create Store

const store = Redux.createStore(Reducer,state,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const todolist = document.getElementById("todolist");

// Subscribe the actions

store.subscribe(()=>{
    const result = store.getState();
    result.items.map(item=>{
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.innerHTML = `${item} <i class="bi bi-trash-fill" onclick="RemoveItem(${item})" ></i>`;
        todolist.appendChild(li);
    })
})

store.dispatch({type: "GET"});

function AddItem()
{
    const item = document.getElementById('txtitem').value;
    store.dispatch({type: "ADD",payload:item});
}

function RemoveItem(item)
{
    store.dispatch({type: "REMOVE",payload:item});
}

function RemoveAllItems()
{
    store.dispatch({type: "REMOVEALL"});
}
