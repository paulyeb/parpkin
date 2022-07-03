import Image from "next/image";
import Link from "next/link";
import { useSpecialOffers } from "../../hooks";

const SpecialOffersFlyer = () => {
    const {specialOffers} = useSpecialOffers();

    return(
        <div className="bg-gray-200 mt-5 pb-5 text-gray-800">
            <div className="container ml-25 p-10 font-medium text-4xl text-center">
                {`Deals & Special Offers`}
            </div>
            <div className="container grid lg:grid-cols-3 justify-center pb-20 gap-6 px-4">
                {specialOffers.map(offer => 
                    <Link href="/specialOffers#freakyfriday" key={offer.id}>
                        <a className="max-w-sm ml-2 dark:bg-gray-800 dark:border-gray-700">
                            <img 
                                src={`http://localhost:8000/${offer.image}`} 
                                className="object-cover w-full h-96"
                            />
                        </a>
                    </Link>
                )}  
            </div>
        </div>
    )
}

export default SpecialOffersFlyer;