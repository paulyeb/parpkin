import {Backdrop} from "../Layout"
import CartBackground from "./CartBackground"
 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import useCheckout from "../../hooks/useCheckout";

const ConfirmOrder = ({dismissConfirmOrder}) => {
    const {state} = useContext(CartContext);

    const {getCheckoutPage} = useCheckout();

    const order = state.cart;

    const orderDetails = order.map(orderedItem => ({
        name: orderedItem.name,
        image: orderedItem.image,
        details: orderedItem.description
    }));

    // console.log(orderDetails);
    
    // console.log(order);
    const subtotal = order.map(item => item.price).reduce((partialSum, a) => partialSum + a, 0)
    const deliveryFee = 0.00;
    const total = subtotal + deliveryFee;
    
    const params = {
        amount: total
    }

    return (
        <Backdrop>
            <CartBackground>
                <div className="m-2 flex justify-between sticky top-0 bg-white items-center border-b">
                    <div className="mx-2 text-gray-800 text-lg my-3 font-medium px-2">
                        ORDER SUMMARY
                    </div>
                    <button 
                        onClick={dismissConfirmOrder}
                        className="active:bg-gray-300 border-2 border-gray-300 rounded-2xl w-10 h-10 hover:bg-gray-100"
                    >
                        <FontAwesomeIcon icon={faArrowRightFromBracket} style={{width: '20px', height: '40px'}} className="ml-2 mb-4" />
                    </button>    
                </div>

                {order.map(orderedItem => 
                <div className="flex p-1 mx-2 border-b" key={orderedItem.id}>
                    <div className="">
                        <img 
                        src={orderedItem.image}
                        className="border object-cover rounded-lg m-2 h-20 w-20"
                        />
                    </div>
                    <div className="ml-3 flex flex-col justify-between items-between w-full">
                        <div className="flex flex-col justify-between pt-1">
                            <p className="font-medium">{orderedItem.name}</p>
                            <p className="w-80">{orderedItem.description}</p>
                        </div>

                        <div className="mt-2 flex justify-between items-center text-gray-900 pb-2">
                            <p className="font-medium">Qty: {orderedItem.quantity}</p>
                            <p className="px-4 font-medium">{orderedItem.price}.00</p>   
                        </div>
                    </div>
                </div>
                )}
                <p className="text-right px-7 mt-2">Subtotal = GHS {subtotal}.00</p>
                <p className="text-right px-7">Delivery fee = GHS {deliveryFee}.00</p>
                <p className="text-right px-7 mt-2 font-medium text-lg">Total Cost = GHS {total}.00</p>
                
                <div className="text-center">
                    <button
                        className="m-2 w-60 border border-gray-800 p-2 mb-3 rounded-lg outline-none text-lg font-medium active:bg-gray-300 hover:bg-gray-100"
                        onClick={() => getCheckoutPage(params)}
                    >
                        PAY GHS {total}.00
                    </button>
                </div>
            </CartBackground>
        </Backdrop>
    )
}

export default ConfirmOrder;