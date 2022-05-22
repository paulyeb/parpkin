import { createContext, useState } from "react";
// import { useReducer } from "react";
// import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isLoggedIn, setisLoggedIn] = useState(false);

    // const [authState, authDispatch] = useReducer(authReducer, {
    //     isLoggedIn: false
    // });

    // if(localStorage.getItem('api_token')) {
    //     setisLoggedIn(true);
    // }

    return <AuthContext.Provider value={{isLoggedIn}}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;