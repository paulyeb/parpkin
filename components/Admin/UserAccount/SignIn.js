import Image from "next/image";

const SignIn = () => {
    return(
        <div className="container flex flex-col items-center text-center mt-20 lg:mt-20">
            <div className="lg:mb-10 mb-5">
                <Image 
                    src="/images/company logo/BUSINESS LOGO-1.png"
                    className="objectFit" 
                    width={190} 
                    height={190}  
                />
            </div>
            <div className="lg:mt-0">
                <div className="lg:mb-5 mb-3 font-bold text-center lg:text-2xl text-lg text-gray-800">
                    HELLO ADMIN,
                </div>
                <div className="text-2xl">
                    <form>
                        <div className="flex flex-col items-center">
                            <input 
                                type="text" 
                                className="border-b border-gray-700 focus:outline-none text-gray-800 text-xl lg:text-2xl lg:font-medium text-center h-20 w-4/5 placeholder-gray-500" 
                                placeholder="Enter Staff Username" 
                                required
                            />
                            <input 
                                type="password" 
                                className="border-b border-gray-700 focus:outline-none text-gray-800 text-xl lg:text-2xl lg:font-medium text-center h-20 w-4/5 placeholder-gray-500" 
                                placeholder="Enter Your Password" 
                                required
                            />
                        </div>
                        <button 
                            className="outline-none text-white text-xl m-6 py-3 lg:py-3 lg:px-10 w-2/4 lg:w-auto bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 font-medium rounded-3xl"
                            type="submit"
                        >
                            Get In
                        </button>
                        <p 
                            className="text-sm text-gray-800 m-3"
                        >
                            <a href="#" className="ml-1 border-b border-gray-800 font-medium text-lg">Forgot Password?</a>
                        </p>
                        {/* <p 
                            className="text-sm text-gray-800 mt-1 mb-6"
                        >
                            or
                        </p>
                        <a 
                            href="/admin/register_new_admin" 
                            className="outline-none border border-gray-800 text-xl m-4 py-3 lg:py-3 lg:px-10 px-5 w-4/5 lg:w-3/5 font-medium rounded-3xl"
                        >
                            Register New Administrator
                        </a>   */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn;