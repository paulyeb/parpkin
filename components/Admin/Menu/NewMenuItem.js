import { useEffect, useState } from "react";
import useCategories from "../../../hooks/useCategories";

const NewMenuItem = ({ onAddMenuItem }) => {
    const [name, setName] =useState('');
    const [category, setCategory] =useState('');
    const [description, setDescription] =useState('');
    const [image, setImage] =useState(null);
    const [price, setPrice] =useState('');

    const { categories } = useCategories();

    useEffect(() => {
        categories
    }, [categories]);

    const nameHandler = (e) => {
        setName(e.target.value);
    }

    const categoryHandler = (e) => {
        setCategory(e.target.value);
    }

    const descriptionHandler = (e) => {
        setDescription(e.target.value);
    }

    const imageHandler = (e) => {
        console.log(e.target.files);
        setImage(e.target.files[0]);
    }
    
    const priceHandler = (e) => {
        setPrice(e.target.value);
    }
    

    const addNewMenuItemHandler = (e) => {
        e.preventDefault();

        const menuItemDetails = {
            name,
            category_id: category,
            description,
            price,
            image,
        }

        console.log('image', image);
        // console.log(menuItemDetails);

        onAddMenuItem(menuItemDetails);

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
                    value={name}  
                    onChange={nameHandler}
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
                    value={category}
                    onChange={categoryHandler}
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
                    value={description}
                    onChange={descriptionHandler}
                    className="mb-5 font-medium border border-gray-400 rounded outline-none focus:outline-none block p-2"
                />
            </div>
            <div>
                <label className="font-bold text-gray-800 text-lg">
                    Image
                </label>
                <input 
                    type="file" 
                    name="image"
                    onChange={imageHandler}
                    className="mb-5 font-medium border border-gray-400 rounded outline-none focus:outline-none block p-2"  
                />
            </div>
            <div>
                <label className="font-bold text-gray-800 text-lg">
                    Price
                </label>
                <input 
                    type="text" 
                    value={price}
                    onChange={priceHandler}
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