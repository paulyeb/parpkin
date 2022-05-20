import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faEye, faTrashCan } from "@fortawesome/free-regular-svg-icons";


const Table = ({ users }) => {
    return(
        <table className="2xl:w-2/3 w-full text-left text-center ml-4 mt-5 text-lg shadow-lg">
            <thead className="">
                <tr className="text-center">
                    <th className="border border-gray-400 p-2 w-3">S/N</th>
                    <th className="border border-gray-400 p-2">First Name</th>
                    <th className="border border-gray-400 p-2">Last Name</th>
                    <th className="border border-gray-400 p-2">Phone</th>
                    <th className="border border-gray-400 p-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map( (user, index) => 
                    <tr key={user.id}>
                        <td className="border border-gray-400 p-2 w-3">{index + 1}</td>
                        <td className="border border-gray-400 p-2">{user.firstname}</td>
                        <td className="border border-gray-400 p-2">{user.lastname}</td>
                        <td className="border border-gray-400 p-2">{user.phone_number}</td>
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