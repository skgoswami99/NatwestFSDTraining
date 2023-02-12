// Default state object
const state = { items: ["Meeting at 9:00 AM"] };

// Reducer
function reducer(initialState = state, action) {
    switch (action.type) {
        case "GET":
            return initialState;
        case "ADD":
            initialState.items.push(action.payload);
            return initialState;
        case "REMOVE":
            initialState.items.splice(initialState.items.indexOf(action.payload), 1);
            return initialState;
        case "REMOVEALL":
            initialState.items.splice(0, initialState.items.length);
            return initialState;
    }
}

// Create Store
const store = Redux.createStore(reducer, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const todolist = document.getElementById("todolist");

// Subscribe the actions
store.subscribe(() => {
    const result = store.getState();
    todolist.innerHTML = "";
    result.items.map(item => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.innerHTML = `${item} <i class="fa-solid fa-xmark mt-2 fa-lg float-end text-danger" onclick="RemoveItem('${item}')"></i>`;
        todolist.appendChild(li);
    });
});

// Trigger Action
store.dispatch({ type: "GET" });

function AddItem() {
    const item = document.getElementById('txtItem').value;
    store.dispatch({ type: "ADD", payload: item });
}

function RemoveItem(item) {
    store.dispatch({ type: "REMOVE", payload: item });
}

function RemoveAllItems() {
    store.dispatch({ type: "REMOVEALL" });
}