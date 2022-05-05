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
                <div className="container flex justify-between bg-yellow-300 rounded-lg align-start text-center shadow border-2 mt-32">
                    <div className="py-5 lg:px-8 px-5 text-gray-700">
                        <h1 className="mb-3 text-3xl font-bold">TOTAL INCOME</h1>
                        <span className="font-medium text-3xl">$3000</span>
                        <div className="mt-6">
                            <a href="#" className="border-2 border-gray-800 my-2 py-1 px-3 rounded-lg">View</a>
                        </div>
                    </div>
                    <div className="py-5 px-8 text-gray-700">
                        <h1 className="mb-3 text-3xl font-bold">TOTAL CUSTOMERS</h1>
                        <span className="font-medium text-3xl">
                            { isLoading ? 'Loading...' : users.length}
                        </span>
                        <div className="mt-6">
                            <a href="#" className="border-2 border-gray-800 my-2 py-1 px-3 rounded-lg">View</a>
                        </div>
                    </div>
                    <div className="py-5 px-8 text-gray-700">
                        <h1 className="mb-3 text-3xl font-bold">TOTAL ORDERS</h1>
                        <span className="font-medium text-3xl">
                            { isLoading ? 'Loading...' : orders.length }
                        </span>
                        <div className="mt-6">
                            <a href="#" className="border-2 border-gray-800 my-2 py-1 px-3 rounded-lg">View</a>
                        </div>
                    </div>
                </div>
                <div className="container"></div>
            </Main>
        </Body>
    )
}

export default Dashboard;