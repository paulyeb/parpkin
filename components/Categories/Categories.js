import CategoryItem from "./CategoryItem";
import {useCategories} from "../../hooks"

const Categories = () => {
    const {categories} = useCategories(); 
    console.log(categories);
    return(
        <div className="container flex flex-col px-3">
            <div className="flex justify-between items-center">
                <div className="py-12 text-gray-800 no-underline hover:no-underline font-extrabold text-2xl lg:text-3xl">
                    <h3>BROWSE CATEGORIES</h3>
                </div>

                <div className="bg-gray-300 w-full h-0.5">
                    
                </div>
            </div>

            <div className="grid lg:grid-cols-4 grid-cols lg:gap-8 gap-6">
                { 
                    categories.map(category => 
                        <CategoryItem 
                            key ={category.id} 
                            title={category.name} 
                            image={`http://localhost:8000/${category.image}`} 
                            link={`menu#${category.name.toLowerCase()}`} 
                        />
                    )
                }

            </div>
        </div>
    )
}

export default Categories;