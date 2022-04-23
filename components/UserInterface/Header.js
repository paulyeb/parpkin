import Link from "next/link";

const Header = () => {
    return(           
        <nav className="bg-white lg:p-10 p-3 sticky fixed mt-0 w-full z-10 top-0">
            <div className="lg:container lg:mx-auto flex flex-wrap lg:justify-between justify-between items-center">
                <div className="lg:hidden">
                    <Link href="/menu">
                        <a className="text-yellow-300 no-underline hover:no-underline font-extrabold">
                            <span className="pl-2"><i className="em em-grinning">Menu</i></span>
                        </a>    
                    </Link>
                </div>
                
                <div className="ml-10">
                    <Link href="/menu">
                        <a className="text-yellow-300 no-underline hover:no-underline font-extrabold">
                            <span className="text-3xl"><i className="em em-grinning">PARPKIN</i></span>
                        </a>
                    </Link>

                    <Link href="/menu">
                        <a className="lg:inline-block hidden lg:mx-10 lg:py-2 lg:px-4 text-gray-800 no-underline">
                            Menu
                        </a>
                    </Link>

                    <Link href="/menu">
                        <a className="lg:inline-block hidden lg:py-2 lg:px-4 text-gray-800 no-underline">
                            Deals
                        </a>
                    </Link>
                </div>

                <div className="">
                    <ul className="list-reset flex justify-between flex-1 lg:flex-none items-center">
                        <li className="mr-3">
                            <Link href="/menu">
                                <a className="lg:inline-block hidden text-gray-800 no-underline py-2 px-4">
                                    Sign in
                                </a>
                            </Link>
                        </li>

                        <li className="mr-3">
                            <Link href="/menu">
                                <a className="lg:inline-block text-gray-800 no-underline py-2 px-4">
                                    Cart
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;