import { useEffect } from "react";
import { useRef } from "react";
import useCategories from "../../../hooks/useCategories";

const NewMenuItem = ({ onAddMenuItem }) => {

    // const [categories, setCategories] = useState([]);

    const { categories } = useCategories();

    useEffect(() => {
        categories
    }, [categories])
    
    const nameInputRef = useRef();
    const categoryInputRef = useRef();
    const descriptionInputRef = useRef();
    const imageInputRef = useRef();
    const priceInputRef = useRef();

    const addNewMenuItemHandler = (e) => {
        e.preventDefault();

        const menuItemDetails = {
            name: nameInputRef.current.value,
            category_id: categoryInputRef.current.value,
            description: descriptionInputRef.current.value,
            price: priceInputRef.current.value,
            image: imageInputRef.current.value,
        }

        console.log('image', imageInputRef.current)

        onAddMenuItem(menuItemDetails);

        nameInputRef.current.value = '';
        categoryInputRef.current.value = '';
        descriptionInputRef.current.value = '';
        priceInputRef.current.value = '';
        imageInputRef.current.value = '';
    }

    return(
        <form className="p-5" onSubmit={addNewMenuItemHandler}>
            <legend className="font-bold text-gray-800 text-2xl mb-5"><u>Create New Menu</u></legend>
            <div>
                <label className="font-bold text-gray-800 text-lg">
                    Name
                </label>
                <input 
                    type="text" 
                    className="mb-5 font-medium border border-gray-400 rounded outline-none focus:outline-none block p-2"
                    ref={nameInputRef}  
                />
            </div>
            <div>
                <label className="font-bold text-gray-800 text-lg">
                    Category
                </label>
                <select 
                    name="" 
                    id="" 
                    required
                    ref={categoryInputRef}
                    className="mb-5 font-medium border border-gray-400 outline-none focus:outline-none block p-2 rounded"
                >
                    <option value="" className="bg-gray-300">Select Category</option>
                    {categories.map(category => 
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                        )
                    }
                </select>
            </div>
            <div>
                <label className="font-bold text-gray-800 text-lg">
                    Description
                </label>
                <textarea 
                    name="" 
                    id="" 
                    cols="35" 
                    rows="2" 
                    ref={descriptionInputRef}
                    className="mb-5 font-medium border border-gray-400 rounded outline-none focus:outline-none block p-2"
                />
            </div>
            <div>
                <label className="font-bold text-gray-800 text-lg">
                    Image
                </label>
                <input 
                    type="file" 
                    ref={imageInputRef}
                    className="mb-5 font-medium border border-gray-400 rounded outline-none focus:outline-none block p-2"  
                />
            </div>
            <div>
                <label className="font-bold text-gray-800 text-lg">
                    Price
                </label>
                <input 
                    type="text" 
                    ref={priceInputRef}
                    className="mb-5 font-medium border border-gray-400 rounded outline-none focus:outline-none block p-2"  
                />
            </div>
            <div className="self-end">
            <button 
                type="submit"
                className="mb-5 font-medium border border-gray-400 outline-none focus:ring-4 hover:ring-2 focus:outline-none block p-2 py-2 self-end px-4 rounded-lg"
            >
                Submit
            </button>
            </div>
        </form>
    )
}

export default NewMenuItem;