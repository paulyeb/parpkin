import Image from "next/image";
import { useContext } from "react";
import { dropdownContext } from "../../store/dropdown-context";

const SpecialOffers = () => {
    const {state} = useContext(dropdownContext);
    return(
        <div className="bg-white text-gray-800">
            <div className="container ml-25 p-10 font-medium text-4xl">
                {`Deals & Special Offers`}
            </div>
            <div className="container grid grid-cols-1 lg:grid lg:grid-cols-3 pb-40 gap-6 px-4">
                <div className="max-w-sm ml-2 dark:bg-gray-800 dark:border-gray-700" id="freakyfriday">
                    <div>
                        <Image 
                            src="/images/special offers/Freaky Friday-1.png" 
                            className="objectFit" 
                            width={700} 
                            height={900}  
                        />
                        <button 
                            className="text-center outline-none text-xl m-2 py-3 px-5 w-2/4 lg:w-auto bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 font-medium rounded-3xl"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>    
                <div className="max-w-sm ml-2 dark:bg-gray-800 dark:border-gray-700" id="">
                    <div>
                        <Image 
                            src="/images/special offers/Freaky Friday-1.png" 
                            className="objectFit" 
                            width={700} 
                            height={900}  
                        />
                        <button 
                            className="text-center outline-none text-xl m-2 py-3 px-5 w-2/4 lg:w-auto bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 font-medium rounded-3xl"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default SpecialOffers;