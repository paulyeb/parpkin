import Body from "../Layout/Body";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import Main from "../Layout/Main";
import Table from "./Table";
import useUser from "../../../hooks/useUser";
import Heading from "../Layout/Heading";

const Customers = () => {
    const { users, isLoading } = useUser();

    return(
        <Body>
            <Sidebar />
            <Main>
                <Header />
                <Heading heading={`Customers`} />
                {
                    isLoading ? 
                        <p className="font-medium my-4 text-2xl">
                            Loading...
                        </p> : 
                    users.length == 0 ? 
                        <p className="font-medium my-4 text-2xl">
                            No Customers Found
                        </p> : 
                    <Table users={users} />
                }
            </Main>  
        </Body>
    )
}

export default Customers;