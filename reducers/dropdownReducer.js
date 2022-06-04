export const dropdownReducer = (state, action) => {
    switch(action.type) 
    {
        case "toggle" :
            return {...state, state: !state.state}
        default :
            return state;
    }
}