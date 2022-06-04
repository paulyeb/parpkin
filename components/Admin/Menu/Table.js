import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faEye, faTrashCan } from "@fortawesome/free-regular-svg-icons";

const Table = ({ menu, actionCallback, showUpdateMenuModal, showMenuModal, showDeleteMenuModal }) => {
    const updateMenuHandler = (menuToBeUpdated) => {
        console.log('Menu to be updated: ', menuToBeUpdated),
        actionCallback(menuToBeUpdated),
        showUpdateMenuModal();
    }

    const viewMenuHandler = (menuToBeViewed) => {
        console.log('Menu to be viewed: ', menuToBeViewed),
        actionCallback(menuToBeViewed),
        showMenuModal();
    }

    const deleteMenuHandler = (menuToBeDeleted) => {
        console.log('Menu to be deleted: ', menuToBeDeleted),
        actionCallback(menuToBeDeleted),
        showDeleteMenuModal();
    }

    return(
        <table className="w-full text-left mt-5 text-lg shadow-lg">
            <thead className="">
                <tr className="text-center">
                    <th className="border border-gray-400 p-2 w-3">S/N</th>
                    <th className="border border-gray-400 p-2">Name</th>
                    <th className="border border-gray-400 p-2">Category</th>
                    <th className="border border-gray-400 p-2">Description</th>
                    <th className="border border-gray-400 p-2">Price</th>
                    <th className="border border-gray-400 p-2">Image</th>
                    <th className="border border-gray-400 p-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {menu.map( (menuItem, index) => 
                    <tr key={menuItem.id} className="text-center">
                        <td className="border border-gray-400 p-2 w-3">{index + 1}</td>
                        <td className="border border-gray-400 p-2">{menuItem.name}</td>
                        <td className="border border-gray-400 p-2">{menuItem.category.name}</td>
                        <td className="border border-gray-400 p-2">{menuItem.description}</td>
                        <td className="border border-gray-400 p-2">{menuItem.price}</td>
                        <td className="border border-gray-400 p-2">
                            <img src={`http://localhost:8000/${menuItem.image}`} alt={menuItem.name} className=" w-20 h-30 pl-1" />   
                        </td>
                        <td className="border border-gray-400 p-2 text-center">
                            <button
                                onClick={() => updateMenuHandler(menuItem)}>
                                <FontAwesomeIcon className="mx-1 px-3 py-3 border hover:ring-1 focus:ring-4 rounded-lg active:bg-gray-200" icon={faPen} />
                            </button>
                            <button
                                onClick={() => viewMenuHandler(menuItem)}
                            >
                                <FontAwesomeIcon className="mx-1 px-3 py-3 border hover:ring-1 focus:ring-4 rounded-lg active:bg-gray-200" icon={faEye} />
                            </button>
                            <button
                                onClick={() => deleteMenuHandler(menuItem)}
                            >
                                <FontAwesomeIcon className="mx-1 px-3 py-3 border hover:ring-1 focus:ring-4 rounded-lg active:bg-gray-200" icon={faTrashCan} />
                            </button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>        
    )
}

export default Table;