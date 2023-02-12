const initialstate = ['user1'];

const reducer = (state,action) =>{

    switch (action.type) 
        {
        
           case 'ADD':
            {
                return [...state, action.value];
            
            }    
            case 'REMOVE':
            {
                state = state.filter(x => x !== action.value);
                return state;
            }
            default:
            {
                return state;
            }
    }
}

export {initialstate}
export default reducer;