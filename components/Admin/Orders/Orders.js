import useOrder from "../../../hooks/useOrder";
import Table from "./Table";

import Body from "../Layout/Body";
import Sidebar from "../Layout/Sidebar";
import Main from "../Layout/Main";
import Header from "../Layout/Header";
import Heading from "../Layout/Heading";


const Orders = () => {
    const { orders, isLoading } = useOrder();
    return(
        <Body>
            <Sidebar />
            <Main>
                <Header />
                <Heading heading={`Orders`} />
                <div className="container flex justify-start items-start">
                    {
                        isLoading ? 
                            <p className="font-medium my-4 text-2xl">
                                Loading...
                            </p> : 
                        orders.length == 0 ? 
                            <p className="font-medium my-4 text-2xl">
                                No Orders Found
                            </p> : 
                        <Table orders={orders} />
                    }
                </div>    
            </Main>
        </Body>
    )
}

export default Orders;