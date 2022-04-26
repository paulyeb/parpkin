import Image from "next/image";
import Link from "next/link";

const SpecialOffersFlyer = () => {
    return(
        <div className="bg-gray-800 mt-5 text-gray-200">
            <div className="container ml-25 p-10 font-medium text-4xl">
                {`Deals & Special Offers`}
            </div>
            <div className="container hidden lg:grid lg:grid-cols-3 gap-6 px-4">
                <Link href="/menu">
                    <a className="max-w-sm ml-2 dark:bg-gray-800 dark:border-gray-700">
                        <Image 
                            src="/images/special offers/Freaky Friday-1.png" 
                            className="objectFit" 
                            width={700} 
                            height={900}  
                        />
                    </a>
                </Link>
                <Link href="/menu">
                    <a className="max-w-sm ml-2 dark:bg-gray-800 dark:border-gray-700">
                        <Image 
                            src="/images/special offers/Freaky Friday-1.png" 
                            className="objectFit" 
                            width={700} 
                            height={900}  
                        />
                    </a>
                </Link>
                <Link href="/menu">
                    <a className="max-w-sm ml-2 dark:bg-gray-800 dark:border-gray-700">
                        <Image 
                            src="/images/special offers/Freaky Friday-1.png" 
                            className="objectFit" 
                            width={700} 
                            height={900}  
                        />
                    </a>
                </Link>
            </div>
            <div className="container lg:hidden grid grid-cols-2 gap-6 px-4">
                <Link href="/menu">
                    <a className="max-w-sm ml-2 dark:bg-gray-800 dark:border-gray-700">
                        <Image 
                            src="/images/special offers/Freaky Friday-1.png" 
                            className="objectFit" 
                            width={900} 
                            height={900}  
                        />
                    </a>
                </Link>
                <Link href="/menu">
                    <a className="max-w-sm ml-2 dark:bg-gray-800 dark:border-gray-700">
                        <Image 
                            src="/images/special offers/Freaky Friday-1.png" 
                            className="objectFit" 
                            width={900} 
                            height={900}  
                        />
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default SpecialOffersFlyer;