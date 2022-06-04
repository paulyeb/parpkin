import { useContext, useState  } from "react";
import { CartContext } from "../../store/cart-context";

import {Backdrop} from "../Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faArrowRightFromBracket, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import CartBackground from "./CartBackground";
import ConfirmOrder from "./ConfirmOrder";

const Cart = ({ dismissCart }) => {
    const {state, dispatch} = useContext(CartContext);
    const [confirmOrder, setConfirmOrder] = useState(false);

    const displayConfirmOrderModal = () => {
        // dismissCart();
        setConfirmOrder(true);
    }

    // console.log('cart: ', state.cart);
    // console.log('state', state);

    const dismissCartHandler = () => {
        dismissCart();
    }

    return(
        <>
        {confirmOrder ? <ConfirmOrder dismissConfirmOrder={() => setConfirmOrder(false)} /> : 
            <Backdrop>
                <CartBackground>   
                    <div className="m-2 flex justify-between items-center border-b mt-4">
                        <button className="flex justify-start items-center my-3 border rounded px-2 active:bg-gray-300 hover:bg-gray-100 disabled:cursor-not-allowed" disabled={!state.cart.length} onClick={() => dispatch({
                            type: 'clearCart'
                        })}>
                            <FontAwesomeIcon icon={faTrashAlt} style={{width: '15px', height: '40px', color: 'red'}} />
                            <span className="mx-2 text-red-400 text-lg">Clear cart</span>
                        </button>
                        <button 
                            onClick={dismissCartHandler}
                            className="active:bg-gray-300 border-2 border-gray-300 rounded-2xl w-10 h-10 hover:bg-gray-100"
                        >
                            <FontAwesomeIcon icon={faArrowRightFromBracket} style={{width: '20px', height: '40px'}} className="ml-2 mb-4 " />
                        </button>    
                    </div>              
                    {state.cart.map( menuItem => 
                    <div className="flex px-2 pb-1 border-b mb-1" key={menuItem.id}>
                        <div className="">
                            <img 
                            src={menuItem.image}
                            className="border m-2 h-30 w-20 rounded-lg"
                            />
                        </div>
                        
                        <div className="ml-6 flex flex-col justify-between items-between w-full">
                            <div className="flex justify-between mt-3">
                                <div>
                                    <p>{menuItem.name}</p>
                                    <p>{menuItem.description}</p>
                                </div>
                                <button onClick={() => dispatch({
                                    type: 'delete',
                                    payload: menuItem
                                })}>
                                    <FontAwesomeIcon icon={faTrashCan} style={{height:'17px'}} />
                                </button>
                            </div>

                            <div className=" flex justify-between items-end text-gray-900 font-medium">
                                <p>GHS  {menuItem.price}</p>
                                <div>
                                    <span className="mr-1">{menuItem.quantity}</span> 
                                    <span className="ml-1">
                                        <button className="px-4 py-1 border text-xl" onClick={() => {dispatch({type: 'decrease', payload: menuItem})}}>—</button>
                                        <button className="px-4 py-1 border text-xl" onClick={() => {dispatch({type: 'increase', payload: menuItem})}}>+</button>
                                    </span>
                                </div>   
                            </div>
                        </div>
                    </div>)}    
                        
                    <div className="flex justify-between items-center mt-5">
                        <div className="flex flex-col mb-3">
                            <span className="">Subtotal</span>
                            <span className="font-bold">{`GHS ${state.cart.map(item => item.price).reduce((partialSum, a) => partialSum + a, 0)}.00`}</span>
                        </div>
                        <button 
                            className="border rounded-lg shadow-lg text-white font-bold mb-3 px-4 py-2 bg-green-600 outline-none hover:bg-green-500 focus:ring-green-600 focus:ring-4 disabled:bg-gray-500 disabled:cursor-not-allowed"
                            onClick={displayConfirmOrderModal}
                            disabled={!state.cart.length}
                        >
                            Confirm Order
                        </button>
                    </div>
                </CartBackground>
            </Backdrop>
        }
        </>
    )
}

export default Cart;