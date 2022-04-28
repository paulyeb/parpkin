const PlaceOrderBar = () => {
    return(
        <div className="lg:p-3 p-7 flex lg:flex-row lg:justify-center flex-col justify-between items-center bg-gray-800 text-white overflow-y-auto">
            <div className="m-2 font-medium md:text-lg text-xs">
                ORDER FOR DELIVERY, PICK UP OR DINE-IN
            </div>
            <button 
                className="outline-none text-xl m-2 py-3 lg:py-3 lg:px-10 w-2/4 lg:w-auto bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 font-medium rounded-3xl"
            >
                Place Order
            </button>
        </div>
    )
}

export default PlaceOrderBar;