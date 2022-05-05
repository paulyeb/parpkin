import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
    return(
        <div className="container fixed top-30 h-full w-60 hidden lg:block bg-gray-50 flex flex-col  px-12 text-center">
            <Image 
                src={'/images/company logo/BUSINESS LOGO-1.png'}
                height={150}
                width={150}
                className="objectFit"
            />
            <ul className="text-left">
                <li className="mb-3 mt-6 font-medium text-lg">
                    <Link href="/admin/dashboard">
                        Dashboard
                    </Link>
                </li>
                <li className="mb-3 font-medium text-lg">
                    <Link href="/admin/customers">
                        Customers
                    </Link>
                </li>
                <li className="mb-3 font-medium text-lg">
                    <Link href="/admin/orders">
                        Orders
                    </Link>
                </li>
                <li className="mb-3 font-medium text-lg">
                    <Link href="/admin/menu">
                        Menu
                    </Link>
                </li>
                <li className="mb-3 font-medium text-lg">
                    <Link href="/admin/categories">
                        Categories
                    </Link>
                </li>
                <li className="mb-3 font-medium text-lg">
                    <Link href="/admin/homepage">
                        Home Page
                    </Link>
                </li>
                <li className="mb-3 font-medium text-lg">
                    <Link href="/admin/pages">
                        Pages
                    </Link>
                </li>
                <li className="mb-3 font-medium text-lg">
                    <Link href="/admin/income">
                        Income
                    </Link>
                </li>
                <li className="mb-3 font-medium text-lg">
                    <Link href="/admin/gallery">
                        Gallery
                    </Link>
                </li>
                <li className="mb-3 font-medium text-lg">
                    <Link href="/admin/staff">
                        Staff
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;