import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faBars  } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return(           
        <nav className="bg-white lg:p-12 p-3 sticky mt-0 w-full z-10 top-0">
            <div className="lg:container lg:mx-auto flex flex-wrap lg:justify-between justify-between items-center">
                <div className="lg:hidden">
                    <button 
                        onClick={() => console.log('menu icon check')} 
                        className="text-yellow-300 no-underline hover:no-underline font-extrabold"
                    >
                        <FontAwesomeIcon icon = {faBars} style={{height: '25px', color: 'gray' }}  />
                    </button>
                </div>
                
                <div>
                    <Link href="/">
                        <a className="text-yellow-300 no-underline hover:no-underline font-extrabold">
                            <span className="text-5xl"><i className="em em-grinning">PARPKIN</i></span>
                        </a>
                    </Link>

                    <Link href="/menu">
                        <a className="lg:inline-block hidden lg:mx-10 lg:py-2 lg:px-4 text-gray-800 no-underline font-medium text-xl">
                            Menu
                        </a>
                    </Link>

                    <Link href="/specialOffers">
                        <a className="lg:inline-block hidden lg:py-2 lg:pr-5 text-gray-800 no-underline font-medium text-xl">
                            Special Offers
                        </a>
                    </Link>
                </div>

                <div className="">
                    <ul className="list-reset flex justify-between flex-1 lg:flex-none items-center">
                        <li className="mr-3">
                            <Link href="/sign_in">
                                <a className="lg:inline-block hidden text-gray-800 no-underline font-medium text-xl py-2 px-4">
                                    <FontAwesomeIcon icon = {faUserCircle} style={{width: '40px', color: 'gray' }}  />
                                    <span className="ml-3">Sign in</span>
                                </a>
                            </Link>
                        </li>
                        
                        <li className="mr-3"> 
                            <button 
                                onClick={() => console.log('cart check')} 
                                className="lg:inline-block text-gray-800 no-underline font-medium text-lg"
                            >
                                <FontAwesomeIcon icon = {faCartShopping} style={{height: '25px', color: 'grey' }}  />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;