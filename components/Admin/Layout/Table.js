import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faEye, faTrashCan } from "@fortawesome/free-regular-svg-icons";

const Table = ({ allMenu }) => {
    return(
        <table className="2xl:w-2/3 w-full text-left mt-5 text-lg shadow-lg">
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
                {allMenu.map( menuItem => 
                    <tr>
                        <td className="border border-gray-400 p-2 w-3">1</td>
                        <td className="border border-gray-400 p-2">{menuItem.name}</td>
                        <td className="border border-gray-400 p-2">{menuItem.category}</td>
                        <td className="border border-gray-400 p-2">{menuItem.description}</td>
                        <td className="border border-gray-400 p-2">{menuItem.price}</td>
                        <td className="border border-gray-400 p-2">{menuItem.image}</td>
                        <td className="border border-gray-400 p-2 text-center">
                            <button>
                                <FontAwesomeIcon className="mx-1 px-3 py-3 border hover:ring-1 focus:ring-4 rounded-lg" icon={faPen} />
                            </button>
                            <button>
                                <FontAwesomeIcon className="mx-1 px-3 py-3 border hover:ring-1 focus:ring-4 rounded-lg" icon={faEye} />
                            </button>
                            <button>
                                <FontAwesomeIcon className="mx-1 px-3 py-3 border hover:ring-1 focus:ring-4 rounded-lg" icon={faTrashCan} />
                            </button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>        
    )
}

export default Table;