import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    // const username = typeof window !== undefined ? window.localStorage.getItem('username') : null

    return(
        <div className="container flex justify-between items-center bg-white sticky fixed top-0 z-10">
            <div className="">
                <button className="lg:hidden">
                    <FontAwesomeIcon icon={faBars} style={{color: 'Highlight', width: '40px', height:'40px'}}/>
                </button>
            </div>
            
            <div className="flex justify-end items-center">
                <span className="m-3 font-medium">WELCOME { 'ADMINISTRATOR'}</span>
                <button>
                    <FontAwesomeIcon icon={faUserCircle} style={{color: 'Highlight', width: '40px', height:'40px'}}/>
                </button>
            </div>
        </div>
    )
}

export default Header;