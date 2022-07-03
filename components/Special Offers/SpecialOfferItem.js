import { useContext } from "react";
import { useSpecialOffers } from "../../hooks";
import { CartContext } from "../../store/cart-context";

const SpecialOffers = () => {
    const {dispatch} = useContext(CartContext);
    const {specialOffers} = useSpecialOffers();
    return(
        <div className="bg-gray-100 text-gray-800">
            <div className="container ml-25 p-10 font-medium text-4xl text-center">
                {`Deals & Special Offers`}
            </div>
            <div className="container grid grid-cols-1 lg:grid lg:grid-cols-3 pb-40 gap-6 px-4">
                {specialOffers.map(offer => 
                    <div className="max-w-sm ml-2 dark:bg-gray-800 dark:border-gray-700" key={offer.id} id="freakyfriday">
                        <div>
                            <img 
                                src={`http://localhost:8000/${offer.image}`} 
                                className="object-cover w-full h-96 rounded-lg mb-2"
                            />
                            
                            <button 
                                className="text-center outline-none text-xl m-2 py-3 px-5 w-2/4 lg:w-auto bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 font-medium rounded-3xl"
                                onClick={() => dispatch({
                                        type: 'addToCart',
                                        payload: {
                                            id: offer.id,
                                            name: offer.name,
                                            image: `http://localhost:8000/${offer.image}`,
                                            price: offer.price,
                                            description: offer.description,
                                            quantity: 1,
                                        }
                                    })
                                }
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                )}        
            </div>
        </div>
    )
}

export default SpecialOffers;