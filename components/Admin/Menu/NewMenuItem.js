const NewMenuItem = () => {
    return(
        <form className="p-5">
            <legend className="font-bold text-gray-800 text-2xl mb-5"><u>Create New Menu</u></legend>
            <div>
                <label className="font-bold text-gray-800 text-lg">
                    Name
                </label>
                <input 
                    type="text" 
                    className="mb-5 font-medium border border-gray-400 rounded outline-none focus:outline-none block p-2"  
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
                    className="mb-5 font-medium border border-gray-400 outline-none focus:outline-none block p-2 rounded"
                >
                    <option value="" className="bg-gray-300">Select Category</option>
                    <option value="Burger">Burger</option>
                    <option value="Shawarma">Shawarma</option>
                    <option value="Pizza">Pizza</option>
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
                    className="mb-5 font-medium border border-gray-400 rounded outline-none focus:outline-none block p-2"
                />
            </div>
            <div>
                <label className="font-bold text-gray-800 text-lg">
                    Image
                </label>
                <input 
                    type="file" 
                    className="mb-5 font-medium border border-gray-400 rounded outline-none focus:outline-none block p-2"  
                />
            </div>
            <div>
                <label className="font-bold text-gray-800 text-lg">
                    Price
                </label>
                <input 
                    type="text" 
                    className="mb-5 font-medium border border-gray-400 rounded outline-none focus:outline-none block p-2"  
                />
            </div>
            <div className="self-end">
            <button 
                className="mb-5 font-medium border border-gray-400 outline-none focus:ring-4 hover:ring-2 focus:outline-none block p-2 py-2 self-end px-4 rounded-lg"
            >
                Submit
            </button>
            </div>
        </form>
    )
}

export default NewMenuItem;