import Body from "../Layout/Body";
import Sidebar from "../Layout/Sidebar";
import Main from "../Layout/Main";
import Header from "../Layout/Header";

const Dashboard = () => {
    return(
        <Body>
            <Sidebar />
            <Main>
                <Header/>
                <div className="container flex justify-between bg-yellow-300 rounded-lg align-start text-center shadow border-2 mt-32">
                    <div className="py-5 px-8 text-gray-700">
                        <h1 className="mb-3 text-3xl font-bold">TOTAL INCOME</h1>
                        <span className="font-medium text-3xl">$3000</span>
                        <div className="mt-6">
                            <a href="#" className="border-2 border-gray-800 my-2 py-1 px-3 rounded-lg">View</a>
                        </div>
                    </div>
                    <div className="py-5 px-8 text-gray-700">
                        <h1 className="mb-3 text-3xl font-bold">TOTAL CUSTOMERS</h1>
                        <span className="font-medium text-3xl">130</span>
                        <div className="mt-6">
                            <a href="#" className="border-2 border-gray-800 my-2 py-1 px-3 rounded-lg">View</a>
                        </div>
                    </div>
                    <div className="py-5 px-8 text-gray-700">
                        <h1 className="mb-3 text-3xl font-bold">TOTAL ORDERS</h1>
                        <span className="font-medium text-3xl">564</span>
                        <div className="mt-6">
                            <a href="#" className="border-2 border-gray-800 my-2 py-1 px-3 rounded-lg">View</a>
                        </div>
                    </div>
                </div>
                <div className="container">hello</div>
            </Main>
        </Body>
    )
}

export default Dashboard;