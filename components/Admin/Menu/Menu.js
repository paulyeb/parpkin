import { useState, useEffect } from "react";
import Body from "../Layout/Body";
import Header from "../Layout/Header";
import Main from "../Layout/Main";
import Sidebar from "../Layout/Sidebar";
import Table from "../Layout/Table";
import NewMenuItem from "./NewMenuItem";

import useMenu from "../../../hooks/useMenu";
import Categories from "./Categories";
import Backdrop from "../../Layout/Backdrop";

const Menu = () => {
    const { allMenu, addMenuItem } = useMenu();

    const [filteredMenu, setFilteredMenu] = useState([]);
    const [displayCategories, setDisplayCategories] = useState(false);

    useEffect(() => {
        setFilteredMenu(allMenu);
    }, [allMenu]);

    const displayCategoriesHandler = () => {
        setDisplayCategories(true);
    }

    return(
        <Body>
            <Sidebar />
            <Main>
                <Header />

                <div className="container flex justify-start items-center sticky top-10 z-9 bg-white mt-10">
                    <u className="h-10 text-3xl">MENU LIST</u>
                    <button 
                        className="bg-yellow-300 mx-7 h-10 border-2 rounded-lg px-2 border-yellow-600 hover:bg-yellow-400 ring-2 focus:ring-4 ring-yellow-500 focus:ring-yellow-500 outline-none"
                        onClick={displayCategoriesHandler}
                    >
                        Categories
                    </button>
                </div>
                {
                    displayCategories ? 
                        <Backdrop>
                            <Categories 
                                exitCategoriesModal={
                                    () => setDisplayCategories(false)
                                }
                            />
                        </Backdrop> : 
                        null
                }

                <div className="container flex justify-start items-start">
                    {allMenu.length == 0 ? <p className="font-medium my-4 text-2xl">No Menu Found</p> : <Table menu={filteredMenu} />}

                    <div className="fixed top-20 right-10 border-2 border-gray-400 rounded shadow-lg h-5/6 2xl:inline-block p-2 hidden">
                       <NewMenuItem onAddMenuItem={addMenuItem} />
                    </div>
                </div>
            </Main>
        </Body>
    )
}

export default Menu;