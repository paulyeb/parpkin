import Link from "next/link";

export default () => {
    //const clientName = localStorage.getItem('username');
    return(
        <div className="flex flex-col justify-center items-center bg-gray-800 text-white text-center">
            <div className="lg:p-3 p-7 flex flex-col justify-between items-center">
                <div className="mx-2 mb-2 font-medium text-lg">
                    ORDER FOR DELIVERY, PICK UP OR DINE-IN.
                </div>
                <Link href="/menu">
                    <a 
                        className="outline-none text-xl mt-2 mx-2 py-3 px-4 lg:py-3 lg:px-4 w-auto md:w-auto md:px-4 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-600 active:bg-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 font-medium rounded-3xl"
                    >
                        Place Order
                    </a>
                </Link>
            </div>
            <div className="mb-2 font-medium">
                <p>DEAR CLIENT, KINDLY NOTE THAT DELIVERY RUNS ONLY BEWTEEN THE HOURS OF 11:00AM - 8:00PM.</p>
            </div>
        </div>
    )
}