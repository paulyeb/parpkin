import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default () => {
    return(
        <div className="text-white bg-gray-800 lg:px-20 2xl:pt-10 pt-2 2xl:pb-10 mt-0">
            <div className="container lg:flex lg:flex-row lg:justify-start md:flex-wrap lg:items-start grid grid-cols-3 gap-4">
                <div className="lg:inline hidden">
                <Image 
                    src="/images/company logo/BUSINESS LOGO-1.png"
                    className="objectFit" 
                    width={100} 
                    height={100}  
                />
                </div>
                <div className="lg:ml-20">
                    <div  className="lg:mb-3 font-medium">Parpkin Food</div>
                    <ul className="text-gray-300">
                        <li className="hover:text-white my-1"><Link href="/menu"><a>Menu</a></Link></li>
                        <li className="hover:text-white my-1"><Link href="/menu"><a>Order Lookup</a></Link></li>
                        <li className="hover:text-white my-1"><Link href="/menu"><a>Voucher</a></Link></li>
                    </ul>
                </div>

                <div className="lg:ml-20">
                    <div className="lg:mb-3 font-medium">Support</div>
                    <ul className="text-gray-300">
                        <li className="hover:text-white my-1"><Link href="/menu"><a>Get Help</a></Link></li>
                        <li className="hover:text-white my-1"><Link href="/menu"><a>Contact Us</a></Link></li>
                        <li className="hover:text-white my-1"><Link href="/menu"><a>Parpkin Feedback</a></Link></li>
                    </ul>
                </div>

                <div className="lg:ml-20">
                    <div className="lg:mb-3 font-medium">Legal</div>
                    <ul className="text-gray-300">
                        <li className="hover:text-white my-1"><Link href="/menu"><a>Terms and Conditions</a></Link></li>
                        <li className="hover:text-white my-1"><Link href="/menu"><a>Privacy Policy</a></Link></li>
                        <li className="hover:text-white my-1"><Link href="/menu"><a>Disclaimer</a></Link></li>
                        <li className="hover:text-white my-1"><Link href="/menu"><a>Caution Notice</a></Link></li>
                    </ul>
                </div>

                <div className="lg:ml-20">
                    <div className="lg:mb-3 font-medium">About Us</div>
                    <ul className="text-gray-300">
                        <li className="hover:text-white my-1"><Link href="/menu"><a>Parpkin Ghana</a></Link></li>
                        <li className="hover:text-white my-1"><Link href="/menu"><a>Gallery</a></Link></li>
                        <li className="hover:text-white my-1"><Link href="/menu"><a>Job Openings</a></Link></li>
                        <li className="hover:text-white my-1"><Link href="/menu"><a>Staff</a></Link></li>
                    </ul>
                </div>

                <div className="lg:ml-20">
                    <div className="font-medium">Locate Us</div>
                    <ul>
                        <li>
                            <Link href="https://goo.gl/maps/NaR5o5T11uvWLTmu8" target="_blank">
                                <a><FontAwesomeIcon icon={faLocationDot} className="m-2 p-2 border border-gray-500 rounded-full" style={{ color: 'yellow', width: '45px', height: '45px'}} /></a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="lg:ml-20 flex flex-col">
                    <p className="lg:ml-3 font-medium">Interact with us</p>
                    <div className="flex">
                        <Link href={"https://instagram.com/parpkin?igshid=YmMyMTA2M2Y="} target="_blank">
                            <a><FontAwesomeIcon icon={faInstagram} className="my-2 lg:ml-3 p-2 border border-gray-500 rounded-full" style={{ color: 'purple', width: '45px', height: '45px'}} /></a>
                        </Link>
                        <Link href={"https://twitter.com/parpkinshawarma?s=20&t=M_5b30S8mSGpa3yO7RbAyA"} target="_blank">
                            <a><FontAwesomeIcon icon={faTwitter} className="my-2 mx-2 p-2 border border-gray-500 rounded-full" style={{ color: 'skyblue', width: '45px', height: '45px'}} /></a>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="2xl:mt-20 mt-5 pb-2 flex flex-col justify-center items-center">
                <div className="font-medium">Copyright  Parpkin Ghana &copy; 2019</div>
                <p className="font-medium">All Rights Reserved</p>
            </div>
        </div>
    )
}