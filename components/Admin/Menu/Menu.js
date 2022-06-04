import { useState, useEffect } from "react";
import { useMenu, useCategories } from "../../../hooks";
import { Header, Heading, Body, Main, Sidebar} from "../Layout";
import {Pagination} from './../../Layout';
import Table from "./Table";
import NewMenuItem from "./NewMenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { UpdateMenuModal } from "../../Modals";

const Menu = () => {
    const { allMenu, addMenuItem, fetchMenus, isLoading, paginationData } = useMenu();
    const { categories } = useCategories();

    const [menuToReceiveAction, setMenuToReceiveAction] = useState(null);
    const [updateMenu, setUpdateMenu] = useState(false);
    const [viewMenu, setViewMenu] = useState(false);
    const [deleteMenu, setDeleteMenu] = useState(false);

    const [menu, setMenu] = useState([]);
    const [filteredCategory, setFilteredCategory] = useState([]);
    const [filteredPrice, setFilteredPrice] = useState('');
    const [filteredName, setFilteredName] = useState('');
    const [perPage, setPerPage] = useState(4);

    const PER_PAGE_VALUES = [2, 3, 4, 15, 20];

    const params = {
        category: filteredCategory,
        price: filteredPrice,
        name: filteredName,
        per_page: perPage,
        page: 1,
    };

    const filteredCategoryHandler = async (e) => {
        setFilteredCategory(e.target.value);

        params.category = e.target.value;

        fetchAllMenus();
    }
    
    const filteredPriceHandler = (e) => {
        setFilteredPrice(e.target.value);

        params.price = e.target.value;

        fetchAllMenus();
    }

    const filterByNameHandler = () => {
        fetchAllMenus();
    }

    const filteredPerPageHandler = (e) => {
        setPerPage(e.target.value);

        params.per_page = e.target.value;

        fetchAllMenus();
    };

    const fetchAllMenus = () => fetchMenus(params);

    useEffect(() => {
        setMenu(allMenu);
    }, [allMenu]);

    return(
        <Body>
            <Sidebar />
            <Main>
                <Header />

                <Heading heading={`MENU`}>
                    {
                        updateMenu && <UpdateMenuModal dismissModal={() => setUpdateMenu(false)} menuDetails={menuToReceiveAction} id={menuToReceiveAction.id} />
                    }
                    <div className="flex justify-between items-center w-96">

                        <div className="ml-9">
                            <label className="ml-2 font-medium">Filter by categories</label>
                            <select 
                                onChange={filteredCategoryHandler} 
                                value={filteredCategory}
                                className="outline-none border px-3 py-2 rounded-lg mr-5 mt-1"
                            >
                                <option value="all categories" className="bg-gray-200">All Categories</option>
                                    {categories.map( category => 
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    )}
                            </select>
                        </div>

                        <div>
                            <label className="ml-2 font-medium">Filter by price</label>
                            <select 
                                onChange={filteredPriceHandler} 
                                value={filteredPrice} 
                                className="outline-none border px-3 py-2 rounded-lg block mt-1"
                            >
                                <option value="all prices" className="bg-gray-200">All Prices</option>
                                <option value="0 - 20" className="">0 - 20</option>
                                <option value="21 -50">21 - 50</option>
                                <option value="51-80">51 - 80</option>
                                <option value="80 - 100">80 - 100</option>
                            </select>
                        </div>
                        <div className="ml-5">
                            <label className="ml-1 font-medium">Per Page</label>
                            <select onChange={filteredPerPageHandler} value={perPage} name="" id="" className="outline-none border px-3 py-2 rounded-lg block mt-1">
                                {
                                    PER_PAGE_VALUES.map(value => 
                                        <option 
                                            key={value + 'per_page'} 
                                            value={value}
                                        >
                                            {value}
                                        </option>
                                    )
                                }
                            </select>
                        </div>
                        <input 
                            type="search"
                            className="bg-300 ml-10 mt-5 border-2 rounded-lg p-1 border-600 hover:bg-400 ring-2 focus:ring-4 focus:ring-500 outline-none"     
                            placeholder="Search by name"
                            value={filteredName}                
                            onChange={(e) => setFilteredName(e.target.value.toLowerCase())}    
                        />
                        <button>
                            <FontAwesomeIcon 
                                icon={faSearch} 
                                className="mx-3 border p-1 mt-6 rounded ring-2 hover:ring-500 outline-none" 
                                onClick={filterByNameHandler}
                            />
                        </button>
                    </div>
                </Heading>
                <div className="flex justify-between">
                    <div className="flex flex-col grow mr-32">
                        {
                            isLoading
                                ? <p className="font-medium my-4 text-2xl">Loading...</p>
                                : !allMenu.length
                                    ? <p className="font-medium my-4 text-2xl">No Menu Found</p>
                                    : <div>
                                        <Table 
                                            menu={menu} 
                                            actionCallback={(menuDetails) => setMenuToReceiveAction(menuDetails)} 
                                            showUpdateMenuModal = {() => setUpdateMenu(true)}
                                            showMenuModal = {() => setViewMenu(true)}
                                            showDeleteMenuModal = {() => setDeleteMenu(true)}
                                        />
                                    </div>
                        }

                        {
                            !isLoading ? <div className="flex">
                                <Pagination paginationData={paginationData} init={fetchMenus} params={params} />
                            </div> : null
                        }
                    </div>


                    <div className="mr-7 border-2 border-gray-400 rounded shadow-lg h-5/6 2xl:inline-block p-2 hidden">
                       <NewMenuItem onAddMenuItem={addMenuItem} />
                    </div>
                </div>
            </Main>
        </Body>
    )
}

export default Menu;