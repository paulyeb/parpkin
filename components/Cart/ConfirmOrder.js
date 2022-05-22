import Backdrop from "../Layout/Backdrop"
import CartBackground from "./CartBackground"
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../store/cart-context";

const ConfirmOrder = ({dismissConfirmOrder}) => {
    const {state} = useContext(CartContext);

    const order = state.cart;

    return (
        <Backdrop>
            <CartBackground>
                <div className="m-2 flex justify-between items-center border-b mt-4">
                    <div className="mx-2 text-gray-800 text-lg my-3 font-medium px-2">
                        ORDER SUMMARY
                    </div>
                    <button 
                        onClick={dismissConfirmOrder}
                    >
                        <FontAwesomeIcon icon={faArrowRightFromBracket} style={{width: '20px', height: '40px'}} />
                    </button>    
                </div>

                {order.map(orderedItem => 
                <div className="flex p-2 mx-2 border-b" key={orderedItem.id}>
                    <div className="">
                        <Image 
                        src={orderedItem.image}
                        width={90}
                        height={70}
                        className="border-2 m-2"
                        />
                    </div>
                    <div className="ml-6 flex flex-col justify-between items-between w-full">
                        <div className="flex justify-between">
                            <p>{orderedItem.description}</p>
                        </div>

                        <div className="mt-5 flex justify-between items-center text-gray-900">
                            <p>Qty: {state.quantity}</p>
                            <p className="px-4">{orderedItem.price}</p>   
                        </div>
                    </div>
                </div>
                )}
                <p className="text-right px-7 mt-2">Subtotal = GHS 105.00</p>
                <p className="text-right px-7">Delivery fee = GHS 10.00</p>
                <p className="text-right px-7 mt-2 font-medium text-lg">Total Cost = GHS 115.00</p>
                
                <div className="text-center">
                    <button
                        className="m-2 w-60 border border-gray-800 p-2 mb-3 rounded-lg outline-none text-lg font-medium"
                    >
                        PAY GHS 115.00
                    </button>
                </div>
            </CartBackground>
        </Backdrop>
    )
}

export default ConfirmOrder;