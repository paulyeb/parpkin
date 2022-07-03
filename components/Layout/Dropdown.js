import { useRouter } from "next/router";
import Link from "next/link";

export default () => {
    const router = useRouter();
    const home = router.pathname == "/";
    const menu = router.pathname == "/menu";
    const specialOffers = router.pathname == "/specialOffers";

    return <>
        <div className="lg:hidden block text-gray-600 sticky top-14 z-10 bg-white">
            {home ? null 
                : <Link href="/">
                    <a>
                        <div className="border-b border-t border-r py-2 px-3 font-medium active:bg-yellow-300 hover:bg-gray-50 cursor-pointer">Home</div>
                    </a>
                </Link>
            }
            <Link href="/sign_in">
                <a>
                    <div className="border-b border-r border-t py-2 px-3 font-medium active:bg-yellow-300 hover:bg-gray-50 cursor-pointer">My Parpkin Account</div>
                </a>    
            </Link>
            {menu ? null 
                : <Link href="/menu">
                    <a>
                        <div className="border-t border-b border-r py-2 px-3 font-medium active:bg-yellow-300 hover:bg-gray-50 cursor-pointer">Menu</div>
                    </a>
                </Link>
            }
            {specialOffers ? null 
                : <Link href="/specialOffers">
                    <a>
                        <div className="border-t border-b border-r py-2 px-3 font-medium active:bg-yellow-300 hover:bg-gray-50 cursor-pointer">Special Offers</div>
                    </a>
                </Link>
            }
            <div className="border-b border-t border-r py-2 px-3 font-medium active:bg-yellow-300 hover:bg-gray-50 cursor-pointer">Logout</div>
        </div>
    </>
}