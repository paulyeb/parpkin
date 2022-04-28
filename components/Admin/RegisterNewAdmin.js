import Image from "next/image";

const RegisterNewAdmin = () => {
    return(
        <div className="container flex flex-col items-center text-center lg:mt-7 mt-10 lg:mt-20">
            <div className="lg:mb-10 mb-5">
                <Image 
                    src="/images/company logo/BUSINESS LOGO-1.png"
                    className="objectFit" 
                    width={190} 
                    height={190}  
                />
            </div>
            <div className="">
                <div className="lg:mb-10 mb-5 font-bold text-center lg:text-2xl text-lg text-gray-800">
                    REGISTER AS ADMINISTRATOR
                </div>
                <div className="text-2xl">
                    <form>
                        <div className="flex flex-col items-center">
                            <input 
                                type="text" 
                                className="border-b border-gray-700 focus:outline-none text-gray-800 text-xl lg:text-2xl lg:font-medium text-center h-20 lg:w-3/5 w-4/5 placeholder-gray-500" 
                                placeholder="Enter Your First Name" 
                                required
                            />
                            <input 
                                type="text" 
                                className="border-b border-gray-700 focus:outline-none text-gray-800 text-xl lg:text-2xl lg:font-medium text-center h-20 lg:w-3/5 w-4/5 placeholder-gray-500" 
                                placeholder="Enter Your Last Name" 
                                required
                            />
                            <input 
                                type="tel" 
                                className="border-b border-gray-700 focus:outline-none text-gray-800 text-xl lg:text-2xl lg:font-medium text-center h-20 lg:w-2/5 w-4/5 placeholder-gray-500" 
                                placeholder="Your Phone Number" 
                                required
                            />
                        </div>    
                        <div className="lg:flex lg:flex-row lg:justify-around lg:items-center flex flex-col items-center">
                            <input 
                                type="password" 
                                className="border-b border-gray-700 focus:outline-none text-gray-800 text-xl lg:text-2xl lg:font-medium text-center h-20 lg:w-2/5 w-4/5 placeholder-gray-500" 
                                placeholder="Enter Password" 
                                required
                            />
                            <input 
                                type="password" 
                                className="border-b border-gray-700 focus:outline-none text-gray-800 text-xl lg:text-2xl lg:font-medium text-center h-20 lg:w-2/5 w-4/5 placeholder-gray-500" 
                                placeholder="Re-enter Password" 
                                required
                            />
                        </div>
                        <button 
                            className="outline-none text-white text-xl lg:mt-9 mt-6 mb-3 py-3 lg:py-3 lg:px-10 w-2/4 lg:w-auto bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 font-medium rounded-3xl"
                            type="submit"
                        >
                            REGISTER
                        </button>  
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterNewAdmin;