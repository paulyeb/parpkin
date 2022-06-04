import { useState } from "react";
import { useCategories, useMenu } from "../../hooks";
import {Backdrop} from "../Layout";
import Modal from "./Modal";

export default ({dismissModal, menuDetails, id}) => {
    const {categories} = useCategories();
    const {updateMenuItem} = useMenu();

    const [name, setName] = useState(menuDetails.name);
    const [category, setCategory] = useState(menuDetails.category.name);
    const [description, setDescription] = useState(menuDetails.description);
    const [image, setImage] = useState(menuDetails.image);
    const [price, setPrice] = useState(menuDetails.price);

    const nameHandler = (e) => {
        setName(e.target.value);
    }

    const categoryHandler = (e) => {
        setCategory(e.target.value);
    }

    const descriptionHandler = (e) => {
        setDescription(e.target.value);
    }

    const priceHandler = (e) => {
        setPrice(e.target.value);
    }

    const imageHandler = (e) => {
        setImage(e.target.files[0]),
        console.log(image);
    }

    const updateMenuHandler = (e) => {
        e.preventDefault();

        const updatedMenuDetails = {
            name,
            category_id: category,
            description,
            image,
            price
        }

        console.log(updatedMenuDetails);

        updateMenuItem(id, updatedMenuDetails);
    }

    return (
        <Backdrop>
            <Modal>
                {/* <h1 className="text-center text-xl font-medium underline">Update Menu</h1> */}

                <form className="p-5" onSubmit={updateMenuHandler}>
                    <legend className="font-bold text-gray-800 text-center text-2xl mb-5"><u>Update Menu</u></legend>
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
                            <option value={menuDetails.category_id} className="bg-gray-300">{category}</option>
                            {categories.map(category => 
                                <option key={category.id} 
                                 value={category.id}
                                >
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
                        <img src={`http://localhost:8000/${menuDetails.image}`} alt={menuDetails.name} className="w-20 h-15 pl-1 mb-1" />   
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
                    <div className="flex justify-end">
                        <button 
                            type="button"
                            onClick={dismissModal}
                            className="mb-5 mx-2 font-medium border border-gray-400 outline-none focus:ring-4 hover:ring-2 focus:outline-none block p-2 py-2 self-end px-4 rounded-lg"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit"
                            className="mb-5 font-medium border border-gray-400 outline-none focus:ring-4 hover:ring-2 focus:outline-none block p-2 py-2 self-end px-4 rounded-lg"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </Modal>
        </Backdrop>
    )

}