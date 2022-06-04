import { useContext } from "react";
import { CartContext } from "../../store/cart-context";

const MenuItem = ({ image, name, price, description, id }) => {
    const {state, dispatch} = useContext(CartContext);

    return(
        <div className="max-w-sm rounded-lg mb-6 dark:bg-gray-800 dark:border-gray-700">
            <img 
                src={image} 
                className="objectFit w-72 h-60 rounded-2xl" 
            />
            <h5 className="mb-1 p-5 dark:text-white h-48">
                <div className="text-gray-900 font-bold text-xl ">{name}</div>
                <div className="text-gray-700 font-bold text-xl ">GHS {price}</div>
                <div className="text-gray-600 font-medium text-lg break-normal">{description}</div>
            </h5>
            <div>
            </div>
                <button 
                    className="outline-none text-xl mx-2 py-3 lg:py-3 lg:px-10 w-2/4 lg:w-auto bg-yellow-400 active:bg-yellow-500 ring-4 ring-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:hover:ring-yellow-800 font-medium rounded-3xl"
                    onClick={() => dispatch({
                        type: 'addToCart',
                        payload: {
                            id,
                            name,
                            image,
                            price,
                            description,
                            quantity: 1,
                        }
                    })}
                >
                    Add to Cart
                </button>
            </div>   
    )
}

export default MenuItem;