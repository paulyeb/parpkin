import { useEffect, useState } from "react";
import useCategories from "../../../hooks/useCategories";

import Body from "../Layout/Body";
import Sidebar from "../Layout/Sidebar";
import Main from "../Layout/Main";
import Header from "../Layout/Header";
import Heading from "../Layout/Heading";

import NewCategory from "./NewCategory";
import Table from "./Table";

const Categories = () => {
    const { categories, addCategory, isLoading } = useCategories();
    const [category, setCategory] = useState([]);

    useEffect(() => {
        setCategory(categories)
    }, [categories]);

    return (
        <Body>
            <Sidebar />
            <Main>
                <Header />
                <Heading heading={`Categories`} />
                <div className="container flex justify-start items-start">
                    {
                        isLoading ? 
                            <p className="font-medium my-4 text-2xl">
                                Loading...
                            </p> : 
                        categories.length == 0 ? 
                            <p className="font-medium my-4 text-2xl">
                                No Categories Found
                            </p> : 
                        <Table categories={categories} />
                    }

                    <div className="fixed top-40 right-40 w-1/5 border-2 border-gray-400 rounded shadow-lg 2xl:inline-block p-2 hidden">
                       <NewCategory onAddCategory={addCategory} />
                    </div>
                </div>
            </Main>
        </Body>
    )
}

export default Categories;