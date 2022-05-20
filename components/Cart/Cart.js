import { useContext } from "react";
import { CartContext } from "../../store/cart-context";

import Backdrop from "../Layout/Backdrop";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faArrowRightFromBracket, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ dismissCart}) => {
    const {state, dispatch} = useContext(CartContext);

    const menu = state.cart;

    const dismissCartHandler = () => {
        dismissCart();
    }

    // const menu = [
    //     {
    //         id: 1,
    //         description: 'Cheese burger',
    //         price: 'GHS15.00',
    //         image: '/images/burgers/burger1.jpg'
    //     },
    //     {
    //         id: 2,
    //         description: 'Family Size Pizza',
    //         price: 'GHS65.00',
    //         image: '/images/pizza/pizza1.jpg'
    //     },
    //     {
    //         id: 3,
    //         description: 'Shawarma',
    //         price: 'GHS25.00',
    //         image: '/images/shawarma/shawarma2.jpg'
    //     },
    // ]

    return(
        <Backdrop>
            <div className="container fixed relative bg-white shadow-2xl rounded-lg lg:w-2/5 h-auto">   
                <div className="m-2 flex justify-between items-center border-b my-4">
                    <button className="flex justify-start items-center my-3 border rounded px-2">
                        <FontAwesomeIcon icon={faTrashAlt} style={{width: '15px', height: '40px', color: 'red'}} />
                        <span className="mx-2 text-red-400 text-lg">Remove all orders</span>
                    </button>
                    <button onClick={dismissCartHandler}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} style={{width: '20px', height: '40px'}} />
                    </button>    
                </div>              
                {menu.map( menuItem => 
                <div className="flex p-2 border-b mb-3" key={menuItem.id}>
                    <div className="">
                        <Image 
                        src={menuItem.image}
                        width={70}
                        height={70}
                        className="border-2 m-2"
                        />
                    </div>
                    
                    <div className="ml-6 flex flex-col justify-between items-between w-full">
                        <div className="flex justify-between">
                            <p>{menuItem.description}</p>
                            <button onClick={() => dispatch({
                                type: 'delete',
                                payload: menuItem
                            })}>
                                <FontAwesomeIcon icon={faTrashCan} style={{height:'17px'}} />
                            </button>
                        </div>

                        <div className="mt-4 flex justify-between items-end text-gray-900 font-medium">
                            <p>{menuItem.price}</p>
                             <div>
                                <span className="mr-1">{state.quantity}</span> 
                                <span className="ml-1">
                                    <button className="px-4 py-1 border text-xl" onClick={() => {dispatch({type: 'decrease', payload: menuItem.id})}}>—</button>
                                    <button className="px-4 py-1 border text-xl" onClick={() => {dispatch({type: 'increase', payload: menuItem.id})}}>+</button>
                                </span>
                            </div>   
                        </div>
                    </div>
                </div>)}    
                    
                <div className="flex justify-between items-center mt-5">
                    <div className="flex flex-col mb-3">
                        <span className="">Total (including delivery)</span>
                        <span className="font-bold">GHS 20.00</span>
                    </div>
                    <button className="border rounded-lg shadow-lg text-white font-bold mb-3 px-4 py-2 bg-green-600 outline-none hover:bg-green-500 focus:ring-green-600 focus:ring-4">
                        Confirm Order
                    </button>
                </div>
            </div>
        </Backdrop>
    )
}

export default Cart;