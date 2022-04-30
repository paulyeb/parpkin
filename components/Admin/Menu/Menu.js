import Body from "../Layout/Body"
import Header from "../Layout/Header"
import Main from "../Layout/Main"
import Sidebar from "../Layout/Sidebar"
import Table from "../Layout/Table"

import NewMenuItem from "./NewMenuItem"

const Menu = () => {
    return(
        <Body>
            <Sidebar />
            <Main>
                <Header />
                <div className="container sticky top-10 z-9 bg-white text-3xl mt-10">
                    <u className="h-10">MENU LIST</u>
                </div>
                <div className="container flex justify-start items-start">
                    <Table />
                    <div className="fixed top-20 right-10 border-2 border-gray-400 rounded shadow-lg h-5/6 2xl:inline-block p-2 hidden">
                       <NewMenuItem />
                    </div>
                </div>
            </Main>
        </Body>
    )
}

export default Menu;