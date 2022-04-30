import Header from "../components/Layout/Header";
import PlaceOrderBar from "../components/Layout/PlaceOrderBar";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Layout/Footer";
import MetaData from "../components/Layout/MetaData";

const MenuPage = () => {
    return(
        <>
            <MetaData title={`Parpkin | Food Menu`} />
            <Header />
            <Menu />
            <Footer />
        </>
    )
}

export default MenuPage;