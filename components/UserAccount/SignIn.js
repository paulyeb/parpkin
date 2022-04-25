const SignIn = () => {
    return(
        <div className="container flex flex-col items-center text-center mt-20 lg:mt-20">
            <div className="lg:mb-10 mb-5">
                <div className="lg:mb-10 mb-5 font-medium text-lg text-gray-800">Sign In / <a href="/createAccount">Sign Up</a></div>
                <div className="text-yellow-300 no-underline hover:no-underline font-extrabold text-5xl">
                    <i className="em em-grinning">PARPKIN</i>
                </div>
            </div>
            <div className="lg:mt-4">
                <div className="lg:mb-10 mb-5 font-bold text-center lg:text-2xl text-lg text-gray-800">
                    SIGN IN WITH YOUR PHONE NUMBER
                </div>
                <div className="text-2xl">
                    <form>
                        <div className="flex flex-col items-center">
                            <input 
                                type="tel" 
                                className="border-b border-gray-700 focus:outline-none text-gray-800 text-xl lg:text-2xl lg:font-medium text-center h-20 w-3/5" 
                                placeholder="Phone Number*" 
                                required
                            />
                            <input 
                                type="password" 
                                className="border-b border-gray-700 focus:outline-none text-gray-800 text-xl lg:text-2xl lg:font-medium text-center h-20 w-3/5" 
                                placeholder="Enter Your Password*" 
                                required
                            />
                        </div>
                        <p 
                            className="text-sm text-gray-800 mt-10"
                        >
                            By "logging in to <i>PARPKIN</i>", you agree to our <u><b>Privacy Policy</b></u> and <u><b>Terms {`&`} Conditions.</b></u>
                        </p>
                        <button 
                            className="outline-none text-white text-xl m-6 py-3 lg:py-3 lg:px-10 w-2/4 lg:w-auto bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 font-medium rounded-3xl"
                            type="submit"
                        >
                            Get In
                        </button>
                        <p 
                            className="text-sm text-gray-800 m-3"
                        >
                            Don't have an account? <a href="/createAccount" className="ml-1 border-b border-gray-800 font-medium text-lg">Create One Now</a>
                        </p>
                        <p 
                            className="text-sm text-gray-800 mt-1 mb-6"
                        >
                            or
                        </p>
                        <a 
                            href="/" 
                            className="outline-none border border-gray-800 text-xl m-4 py-3 lg:py-3 lg:px-10 px-5 w-4/5 lg:w-3/5 font-medium rounded-3xl"
                        >
                            Skip, Continue As Guest
                        </a>  
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn;