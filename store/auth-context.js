import { createContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(authReducer, {
        isLoggedIn: false
    });

    return <AuthContext.Provider value={{authState, authDispatch}}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;