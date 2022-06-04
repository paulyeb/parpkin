import { createContext } from "react";
import { useReducer } from "react";
import { dropdownReducer } from "../reducers/dropdownReducer"

export const dropdownContext = createContext();

const initialState = {
    state: false
}

const DropdownProvider = ({children}) => {
    const [state, dispatch] = useReducer(dropdownReducer, initialState);
    
    return <dropdownContext.Provider value={{state, dispatch}}>
        {children}
    </dropdownContext.Provider>
}

export default DropdownProvider;