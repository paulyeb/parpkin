import Image from "next/image";
import Link from "next/link";

const MenuItem = ({ image, title, price, description }) => {
    return(
        <div className="max-w-sm rounded-lg mb-6 dark:bg-gray-800 dark:border-gray-700">
            <Image 
                src={image} 
                className="objectFit rounded-2xl" 
                width={800} 
                height={800}  
            />
            <h5 className="mb-1 p-5 dark:text-white">
                <div className="text-gray-900 font-bold text-xl ">{title}</div>
                <div className="text-gray-700 font-bold text-xl ">{price}</div>
                <span className="text-gray-600 font-medium text-lg ">{description}</span>
            </h5>
            <div>
            </div>
                <button 
                    className="outline-none text-xl m-2 py-3 lg:py-3 lg:px-10 w-2/4 lg:w-auto bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 font-medium rounded-3xl"
                    >
                    Add to Cart
                </button>
            </div>   
    )
}

export default MenuItem;