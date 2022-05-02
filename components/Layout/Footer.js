import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return(
        <div className="text-white bg-gray-800 px-20 pt-10 pb-10 mt-0">
            <div className="container lg:flex lg:flex-row lg:justify-start lg:items-start flex flex-col items-start justify-around">
                <div className="">
                <Image 
                    src="/images/company logo/BUSINESS LOGO-1.png"
                    className="objectFit" 
                    width={100} 
                    height={100}  
                />
                </div>
                <div className="ml-20">
                    <div  className="mb-3 font-medium">Parpkin Food</div>
                    <ul className="text-gray-300">
                        <li className="hover:text-white my-1"><a href="/menu">Menu</a></li>
                        <li className="hover:text-white my-1"><a href="/menu">Order Lookup</a></li>
                        <li className="hover:text-white my-1"><a href="/menu">Voucher</a></li>
                    </ul>
                </div>

                <div className="ml-20">
                    <div className="mb-3 font-medium">Support</div>
                    <ul className="text-gray-300">
                        <li className="hover:text-white my-1"><a href="/menu">Get Help</a></li>
                        <li className="hover:text-white my-1"><a href="/menu">Contact Us</a></li>
                        <li className="hover:text-white my-1"><a href="/menu">Parpkin Feedback</a></li>
                    </ul>
                </div>

                <div className="ml-20">
                    <div className="mb-3 font-medium">Legal</div>
                    <ul className="text-gray-300">
                        <li className="hover:text-white my-1"><a href="/menu">Terms and Conditions</a></li>
                        <li className="hover:text-white my-1"><a href="/menu">Privacy Policy</a></li>
                        <li className="hover:text-white my-1"><a href="/menu">Disclaimer</a></li>
                        <li className="hover:text-white my-1"><a href="/menu">Caution Notice</a></li>
                    </ul>
                </div>

                <div className="ml-20">
                    <div className="mb-3 font-medium">About Us</div>
                    <ul className="text-gray-300">
                        <li className="hover:text-white my-1"><a href="/menu">Parpkin Ghana</a></li>
                        <li className="hover:text-white my-1"><a href="/menu">Gallery</a></li>
                        <li className="hover:text-white my-1"><a href="/menu">Job Openings</a></li>
                        <li className="hover:text-white my-1"><a href="/menu">Staff</a></li>
                    </ul>
                </div>

                <div className="ml-20">
                    <div className="font-medium">Locate Us</div>
                    <ul>
                        <li>
                            <a href="https://goo.gl/maps/NaR5o5T11uvWLTmu8" target="_blank">
                                <FontAwesomeIcon icon={faLocationDot} className="m-2 p-2" style={{ color: 'yellow', width: '45px', height: '45px'}} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="ml-20 flex flex-col">
                    <p className="ml-3 font-medium">Interact with us</p>
                    <div className="flex">
                        <a href={"https://instagram.com/parpkin?igshid=YmMyMTA2M2Y="} target="_blank">
                            <FontAwesomeIcon icon={faInstagram} className="m-2 p-2 border border-gray-500 rounded-full" style={{ color: 'purple', width: '45px', height: '45px'}} />
                        </a>
                        <a href={"https://twitter.com/parpkinshawarma?s=20&t=M_5b30S8mSGpa3yO7RbAyA"} target="_blank">
                            <FontAwesomeIcon icon={faTwitter} className="m-2 p-2 border border-gray-500 rounded-full" style={{ color: 'skyblue', width: '45px', height: '45px'}} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-20 flex flex-col justify-center items-center">
                <div className="font-medium">Copyright &copy; Parpkin Ghana 2019. All Rights Reserved</div>
            </div>
        </div>
    )
}

export default Footer;