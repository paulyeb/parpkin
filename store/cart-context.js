import { createContext } from "react";
import { useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, {
        cart: [
            {
                id: 1,
                description: 'Cheese burger',
                price: 'GHS 15.00',
                image: '/images/burgers/burger1.jpg',
                quantity: 0
            },
            {
                id: 2,
                description: 'Family Size Pizza',
                price: 'GHS 65.00',
                image: '/images/pizza/pizza1.jpg',
                quantity: 0
            },
            {
                id: 3,
                description: 'Shawarma',
                price: 'GHS 25.00',
                image: '/images/shawarma/shawarma2.jpg',
                quantity: 0
            },
        ],
        quantity: 0, 
    })

    return <CartContext.Provider value={{state, dispatch}}>
        {children}
    </CartContext.Provider>
};


export default CartProvider; 