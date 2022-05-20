import Body from "../Layout/Body";
import Sidebar from "../Layout/Sidebar";
import Main from "../Layout/Main";
import Header from "../Layout/Header";

import useUser from "../../../hooks/useUser";
import useOrder from "../../../hooks/useOrder";

const Dashboard = () => {
    const { users, isLoading } = useUser();
    const { orders } = useOrder();

    return(
        <Body>
            <Sidebar />
            <Main>
                <Header/>
                    <div className="container flex justify-center items-center">
                        <div className="flex justify-between bg-gray-50 rounded-xl align-start text-center shadow-xl border mt-32">
                            <div className="py-5 lg:px-8 px-5 text-gray-700">
                                <h1 className="mb-3 text-xl font-bold">TOTAL INCOME</h1>
                                <span className="font-medium text-xl">GHS4000.00</span>
                                <div className="mt-6">
                                    <a href="#" className="border-2 border-gray-800 my-2 py-1 px-3 rounded-lg">View</a>
                                </div>
                            </div>
                            <div className="py-5 px-8 text-gray-700">
                                <h1 className="mb-3 text-xl font-bold">TOTAL CUSTOMERS</h1>
                                <span className="font-medium text-xl">
                                    { isLoading ? <p className="text-sm">Loading...</p> : users.length}
                                </span>
                                <div className="mt-6">
                                    <a href="#" className="border-2 border-gray-800 my-2 py-1 px-3 rounded-lg">View</a>
                                </div>
                            </div>
                            <div className="py-5 px-8 text-gray-700">
                                <h1 className="mb-3 text-xl font-bold">TOTAL ORDERS</h1>
                                <span className="font-medium text-xl">
                                    { isLoading ? <p className="text-sm">Loading...</p> : orders.length }
                                </span>
                                <div className="mt-6">
                                    <a href="#" className="border-2 border-gray-800 my-2 py-1 px-3 rounded-lg">View</a>
                                </div>
                            </div>
                        </div>

                        <div className="container"></div>
                    </div>
            </Main>
        </Body>
    )
}

export default Dashboard;