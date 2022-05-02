import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCategories from "../../../hooks/useCategories";

const Categories = ({exitCategoriesModal}) => {
    const {categories} = useCategories();

    const exitCategoriesModalHandler = () => {
        exitCategoriesModal();
    }
    
    return(
        <div className="container flex justify-center relative top-20 bg-white border py-5 lg:w-2/5 rounded-lg">
            
            { !categories ? 
                <p className="font-medium text-2xl">No Categories Found</p> : 
                    categories.length === 0 ? <p className="font-medium text-2xl">Loading...</p> :
                <div className="flex-col justify-center items-center">
                    <p className="px-3 py-1 my-2 font-medium text-xl underline">
                        CATEGORIES
                    </p>
                    <ul className="self-center">
                        {
                            categories.map( category =>
                                <a href="#">
                                    <li key={category.id}
                                        className="border-b p-4 w-96 hover:bg-gray-50"
                                    >
                                        <div className="flex justify-between items-center">
                                            <div className="font-medium text-xl">
                                                {category.name} 
                                            </div>
                                            <FontAwesomeIcon 
                                                icon={faArrowRight} 
                                                className="text-end text-xs"
                                            />
                                        </div>
                                    </li>
                                </a>
                            )
                        }
                        <div className="flex justify-end items-center">
                            <button 
                                onClick={exitCategoriesModalHandler}
                                className="border px-3 py-1 my-3 rounded text-red-500 font-medium outline-none text-xl hover:ring-2 focus:ring-4">
                                EXIT
                            </button>
                        </div>
                    </ul>
                </div>
            }
        </div>
    )
}

export default Categories;