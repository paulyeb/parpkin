import { useState } from "react";

const NewCategory = ({ onAddCategory}) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);

    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const imageHandler = (e) => {
        setImage(e.target.files[0])
    }

    const addNewCategoryHandler = (e) => {
        e.preventDefault();

        const categoryInfo = {
            name,
            image
        }

        console.log(categoryInfo);

        onAddCategory(categoryInfo);
        
        }

    return(
        <form className="p-5" onSubmit={addNewCategoryHandler}>
            <legend className="font-bold text-gray-800 text-2xl mb-5"><u>Create New Category</u></legend>
            <div>
                <label className="font-bold text-gray-800 text-lg">
                    Name
                </label>
                <input 
                    type="text" 
                    className="mb-5 w-full font-medium border border-gray-400 rounded outline-none focus:outline-none block p-2"
                    onChange={nameHandler}  
                    value={name}
                />
            </div>
            <div>
                <label className="font-bold text-gray-800 text-lg">
                    Image
                </label>
                <input 
                    type="file" 
                    className="mb-5 w-full font-medium border border-gray-400 rounded outline-none focus:outline-none block p-2"
                    onChange={imageHandler}
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

export default NewCategory;