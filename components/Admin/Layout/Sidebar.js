import Image from "next/image";

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
                    <a href="/admin/dashboard">
                        Dashboard
                    </a>
                </li>
                <li className="mb-3 font-medium text-lg">
                    <a href="/admin/customers">
                        Customers
                    </a>
                </li>
                <li className="mb-3 font-medium text-lg">
                    <a href="/admin/orders">
                        Orders
                    </a>
                </li>
                <li className="mb-3 font-medium text-lg">
                    <a href="/admin/menu">
                        Menu
                    </a>
                </li>
                <li className="mb-3 font-medium text-lg">
                    <a href="/admin/homepage">
                        Home Page
                    </a>
                </li>
                <li className="mb-3 font-medium text-lg">
                    <a href="/admin/pages">
                        Pages
                    </a>
                </li>
                <li className="mb-3 font-medium text-lg">
                    <a href="/admin/income">
                        Income
                    </a>
                </li>
                <li className="mb-3 font-medium text-lg">
                    <a href="/admin/gallery">
                        Gallery
                    </a>
                </li>
                <li className="mb-3 font-medium text-lg">
                    <a href="/admin/staff">
                        Staff
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;