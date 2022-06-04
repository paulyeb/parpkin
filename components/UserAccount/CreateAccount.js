import { useRouter } from "next/router";
import { useRef, useState } from "react";
import {useUser} from "../../hooks";

import Link from "next/link";

const CreateAccount = () => {
    const { addNewUser, isLoading } = useUser();
    const [hasError, setHasError] = useState(false);
    const router = useRouter();

    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const phoneInputRef = useRef();
    const passwordInputRef = useRef();
    const reEnterPasswordInputRef = useRef();

    let errorMessage = "Passwords must match each other";
    
    const addNewUserHandler = async (e) => {
        e.preventDefault();
        setHasError(false);

    
        const userDetails = {
            firstname: firstNameInputRef.current.value,
            lastname: lastNameInputRef.current.value,
            phone_number: phoneInputRef.current.value,
            password: passwordInputRef.current.value,
        }

        console.log(userDetails);

        // let errorMessage;
            
        if (passwordInputRef.current.value !== reEnterPasswordInputRef.current.value) {
            setHasError(true);
            return;
        }
        
        await addNewUser(userDetails);

        console.log('New User:', userDetails)
    
        firstNameInputRef.current.value = ''
        lastNameInputRef.current.value = ''
        phoneInputRef.current.value = ''
        passwordInputRef.current.value = ''
        reEnterPasswordInputRef.current.value = ''
        
        await router.push('/');
    }

    return(
        <div className="container flex flex-col items-center text-center mt-10 lg:mt-20">
            <div className="lg:mb-10 mb-5">
                <div className="lg:mb-10 mb-5 font-medium text-lg text-gray-800">Sign Up</div>
                <div className="text-yellow-300 no-underline hover:no-underline font-extrabold text-5xl">
                    <i className="em em-grinning">WELCOME TO PARPKIN</i>
                </div>
            </div>
            <div className="lg:mt-4">
                <div className="lg:mb-10 mb-5 font-bold text-center lg:text-2xl text-lg text-gray-800">
                    CREATE A FREE ACCOUNT TODAY!
                </div>
                <div className="text-2xl">
                    <form onSubmit={addNewUserHandler}>
                        <div className="flex flex-col items-center">
                            <div className="lg:flex lg:flex-row lg:justify-around lg:items-center flex flex-col items-center">
                                <input 
                                    type="text" 
                                    className="border-b border-gray-700 focus:outline-none text-gray-800 text-xl lg:text-2xl lg:font-medium text-center h-20 lg:w-2/5 w-4/5 placeholder-gray-500" 
                                    placeholder="Enter First Name" 
                                    required
                                    ref={firstNameInputRef}
                                />
                                <input 
                                    type="text" 
                                    className="border-b border-gray-700 focus:outline-none text-gray-800 text-xl lg:text-2xl lg:font-medium text-center h-20 lg:w-2/5 w-4/5 placeholder-gray-500" 
                                    placeholder="Enter Last Name" 
                                    required
                                    ref={lastNameInputRef}
                                />
                            </div>
                            <input 
                                type="tel" 
                                className="border-b border-gray-700 focus:outline-none text-gray-800 text-xl lg:text-2xl lg:font-medium text-center h-20 w-2/5 placeholder-gray-500" 
                                placeholder="Phone Number" 
                                required
                                ref={phoneInputRef}
                            />
                        </div>    
                        <div className="lg:flex lg:flex-row lg:justify-around lg:items-center flex flex-col items-center">
                            <input 
                                type="password" 
                                className="border-b border-gray-700 focus:outline-none text-gray-800 text-xl lg:text-2xl lg:font-medium text-center h-20 w-2/5 placeholder-gray-500" 
                                placeholder="Enter Password" 
                                required
                                ref={passwordInputRef}
                            />
                            <input 
                                type="password" 
                                className="border-b border-gray-700 focus:outline-none text-gray-800 text-xl lg:text-2xl lg:font-medium text-center h-20 w-2/5 placeholder-gray-500" 
                                placeholder="Re-enter Password" 
                                required
                                ref={reEnterPasswordInputRef}
                            />
                        </div>
                        {
                            hasError ?
                                <p className="text-sm text-red-600 mt-3">
                                    <u><b><i>{errorMessage}</i></b></u>
                                </p> : 
                            null
                        }
                        <p 
                            className="text-sm text-gray-800 mt-10"
                        >
                            By "creating a <i>PARPKIN</i> account", you agree to our <u><b>Privacy Policy</b></u> and <u><b>Terms {`&`} Conditions.</b></u>
                        </p>
                        <button 
                            className="outline-none text-white text-xl mt-6 mb-3 py-3 lg:py-3 lg:px-10 w-2/4 lg:w-auto bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 font-medium rounded-3xl"
                            type="submit"
                        >
                            {isLoading ? 'Loading...' : 'Sign Up'}
                        </button>
                        <p 
                            className="text-sm text-gray-800 mt-1 mb-5"
                        >
                            or
                        </p>
                        <Link href="/"> 
                            <a
                                className="outline-none border border-gray-800 lg:text-xl m-4 py-3 lg:py-3 lg:px-10 px-5 w-4/5 lg:w-3/5 font-medium rounded-3xl"
                            >
                                Skip, Continue As Guest
                            </a>
                        </Link>  
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount;