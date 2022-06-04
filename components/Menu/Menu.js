import { useState, useContext } from "react";
import { useRouter } from "next/router";
import {useCategories } from "../../hooks";
import MenuItem from "./MenuItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {Dropdown} from "../Layout";
import { dropdownContext } from "../../store/dropdown-context";

const Menu = () => {
    const {state} = useContext(dropdownContext);

    const router = useRouter();
    const {categories, fetchCategories} = useCategories();
    // const {allMenu} = useMenu();
    const [filteredMenuItem, setFilteredMenuItem] = useState('');
    
    const params = {
        searchedName: filteredMenuItem
    }

    // const fetchAllCategories = fetchCategories(params);
    
    const searchByNameHandler = () => {
        fetchCategories();
    }

    return(
        <div>
            {state.state ? <Dropdown /> : null}
            {/* {<div className="mx-2 text-gray-600">
                <div className="border-b p-2 hover:bg-gray-200 cursor-pointer">Home</div>
                <div className="border-b p-2 hover:bg-gray-200 cursor-pointer">Sign In | My Account</div>
                <div className="border-b p-2 hover:bg-gray-200 cursor-pointer">Special Offers</div>
                <div className="border-b p-2 hover:bg-gray-200 cursor-pointer">Logout</div>
            </div>} */}

            <div className="container lg:flex lg:justify-start lg:items-start pb-60">
                <div className="hidden lg:inline fixed top-30 p-2">
                    <div className="mt-2 mb-1 font-bold text-xl">
                        CATEGORIES
                    </div>

                    {
                        categories.map( category => 
                            <div className="mb-1" key={category.id}>
                                <a href={`#${category.name.toLowerCase().trim()}`} className={`${router.pathname == "/menu#"+category.name.toLowerCase().trim() ? "active active:font-medium hover:font-bold text-lg" : "active:font-medium hover:font-bold text-lg"}`}>
                                    {category.name}
                                </a>
                            </div>
                        )
                    }
                </div>

                <div className="lg:ml-60 grow flex flex-col">
                    <div className="flex items-center lg:justify-start justify-center">
                        <input 
                            type="search" 
                            name="" 
                            id=""
                            placeholder="Search"
                            value={filteredMenuItem}
                            onChange={(e) => setFilteredMenuItem(e.target.value)}
                            className="lg:top-9 top-3 border-2 lg:my-9 my-16 w-60 rounded-lg focus:outline-none p-2" 
                        />
                        <button>
                            <FontAwesomeIcon 
                                icon={faSearch} 
                                style={{weight: '20px', height: "30px"}}
                                className="mx-4 border px-2 py-1 rounded ring-2 hover:ring-500 outline-none" 
                                onClick={searchByNameHandler}
                            />
                        </button>
                    </div>

                    <h1 className="font-medium text-gray-800 text-2xl text-center border-b-2 sticky top-14 bg-white p-2 w-full">MENU</h1>
                    
                    
                    {
                        categories.map(category => 
                            <div key={category.id} className="px-4 bg-gray-50 lg:mt-4 mt-10">
                                <div id={category.name.toLowerCase()}>
                                    <div className="py-10 text-4xl font-bold text-xl">
                                        {category.name.toUpperCase()}
                                    </div>
                                    <div className="grid lg:grid-cols-3 lg:gap-6">
                                        {category.menu.map(menuItem => 
                                            <MenuItem 
                                                key={menuItem.id}
                                                id = {menuItem.id}
                                                image={`http://localhost:8000/${menuItem.image}`}
                                                name={menuItem.name}
                                                price={menuItem.price}
                                                description={menuItem.description}
                                                className="overflow-hidden"
                                            />
                                        )}
                                    </div>    
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu;