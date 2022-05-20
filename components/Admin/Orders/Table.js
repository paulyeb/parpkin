import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faEye, faTrashCan } from "@fortawesome/free-regular-svg-icons";


const Table = ({ orders }) => {
    return(
        <table className="2xl:w-2/3 w-full text-left mt-5 text-lg shadow-lg">
            <thead className="">
                <tr className="text-center">
                    <th className="border border-gray-400 p-2 w-3">S/N</th>
                    <th className="border border-gray-400 p-2">Order Code</th>
                    <th className="border border-gray-400 p-2">Customer's Name</th>
                    <th className="border border-gray-400 p-2">Date</th>
                    <th className="border border-gray-400 p-2">Time</th>
                    <th className="border border-gray-400 p-2">Details</th>
                    <th className="border border-gray-400 p-2">Total</th>
                    <th className="border border-gray-400 p-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {orders.map( (order, index) => 
                    <tr key={order.id}>
                        <td className="border border-gray-400 p-2 w-3">{index + 1}</td>
                        <td className="border border-gray-400 p-2 w-3">{order.id}</td>
                        <td className="border border-gray-400 p-2 w-3">{`${order.user.firstname} ${order.user.lastname}`}</td>
                        <td className="border border-gray-400 p-2">{order.date}</td>
                        <td className="border border-gray-400 p-2">{order.created_at}</td>
                        <td className="border border-gray-400 p-2">{order.details}</td>
                        <td className="border border-gray-400 p-2">{order.total}</td>
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