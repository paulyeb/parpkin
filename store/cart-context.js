import { createContext } from "react";
import { useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext();

const initialState = {
    cart: [],
    itemQuantity: 0
}

const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return <CartContext.Provider value={{state, dispatch}}>
        {children}
    </CartContext.Provider>
};

export default CartProvider; 