import Header from "../components/Layout/Header";
import PlaceOrderBar from "../components/Layout/PlaceOrderBar"
import Showcase from "../components/Home/Showcase";
import Categories from "../components/Home/Categories";
import Footer from "../components/Layout/Footer";
import SpecialOffersFlyer from "../components/Special Offers/Flyer";
import Backdrop from "../components/Layout/Backdrop";
import MetaData from "../components/Layout/MetaData";

const Home = () => {
    return(
        <>
            <MetaData title={`Parpkin Shawarma-Burger-Pizza-Fries`} />
            <Header />
            <PlaceOrderBar />
            <Showcase />
            <Categories />
            <SpecialOffersFlyer />
            <Footer />
            {/* <Backdrop>Still a cant beeive id</Backdrop> */}
        </>
    )
}

export default Home;