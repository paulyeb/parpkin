import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faBars  } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState,  useContext } from "react";
import Cart from "../Cart/Cart";
import { CartContext } from "../../store/cart-context";
import { useRouter } from "next/router";
import { dropdownContext } from "../../store/dropdown-context";

export default () => {
    const {dispatch} = useContext(dropdownContext);

    const active = "active lg:inline-block hidden visited:border-b lg:mx-10 lg:py-2 lg:px-4 text-gray-800 no-underline font-medium text-xl hover:font-bold";

    const inactive = "lg:inline-block hidden visited:border-b lg:mx-10 lg:py-2 lg:px-4 text-gray-800 no-underline font-medium text-xl hover:font-bold";
    
    const router = useRouter();
    const {state} = useContext(CartContext);
    const [signIn, setSignIn] = useState(true);
    const [displayCart, setDisplayCart] = useState(false);
    
    const totalItemsInCart = state.cart.map(items => items.quantity).reduce((partialSum, a) => partialSum + a, 0);

    const displayCartHandler = () => {
        setDisplayCart(true);
    }

    return(           
        <nav className="bg-white lg:p-0 p-3 sticky mt-0 w-full z-10 top-0" id="navbar">
            <div className="lg:container lg:mx-auto flex flex-wrap lg:justify-between justify-between items-center">
                <div className="lg:hidden">
                    <button 
                        onClick={() => dispatch({
                            type: "toggle"
                        })} 
                        className="text-yellow-300 no-underline hover:no-underline font-extrabold mt-2"
                    >
                        <FontAwesomeIcon icon = {faBars} style={{height: '25px', color: 'gray' }}  />
                    </button>
                </div>
                
                <div>
                    <Link href="/">
                        <a className="text-yellow-300 hidden lg:inline-block no-underline hover:no-underline font-extrabold">
                            <Image 
                                src="/images/company logo/BUSINESS LOGO-1.png"
                                className="objectFit" 
                                width={120} 
                                height={120}  
                            />
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="text-yellow-300 lg:hidden inline-block no-underline hover:no-underline font-extrabold">
                            <span className="md:text-5xl text-3xl ml-2"><i className="em em-grinning">PARPKIN</i></span>
                        </a>
                    </Link>
                </div>
                
                <div className="hidden lg:inline-block">
                    <Link href="/menu">
                        <a className={`${router.pathname == "/menu" ? active : inactive}`}>
                            Menu
                        </a>
                    </Link>

                    <Link href="/specialOffers">
                        <a className={`${router.pathname == "/specialOffers" ? active : inactive}`}>
                            Special Offers
                        </a>
                    </Link>
                </div>

                <div className="">
                    <ul className="list-reset flex justify-between flex-1 lg:flex-none items-center">
                        {
                            signIn ? <li className="mr-0">
                                <Link href="/sign_in">
                                    <a className="lg:inline-block hidden text-gray-800 no-underline font-medium text-xl py-2 px-2 mr-2">
                                        <FontAwesomeIcon icon = {faUserCircle} style={{width: '30px', color: 'gray' }}  />
                                    </a>
                                </Link>
                            </li> :
                            <li className="mr-2">
                                <Link href="/sign_in">
                                    <a className="lg:inline-block hidden text-gray-800 no-underline font-medium text-xl py-2 px-4">
                                        <div className="">Sign in</div>
                                    </a>
                                </Link>
                            </li>
                        }
                        
                        <button 
                            className="flex border md:py-1 md:px-2 p-1 rounded-lg shadow active:bg-gray-300 hover:bg-gray-100 mb-2" 
                            onClick={displayCartHandler}
                        > 
                            <div 
                                className="lg:inline-block text-gray-800 no-underline font-medium text-lg mx-2 pt-1"
                            >
                                <FontAwesomeIcon 
                                    icon = {faCartShopping} 
                                    style={{height: '20px', color: 'grey' }}
                                />
                            </div>
                            <span className="text-gray-800 font-medium md:text-lg">{totalItemsInCart}</span> 
                        </button>
                        {
                            displayCart ? <Cart dismissCart={() => setDisplayCart(false)} /> : null
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}