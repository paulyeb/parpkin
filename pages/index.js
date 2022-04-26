import Header from "../components/Layout/Header";
import PlaceOrderBar from "../components/Layout/PlaceOrderBar"
import Showcase from "../components/Home/Showcase";
import Categories from "../components/Home/Categories";
import Footer from "../components/Layout/Footer";
import SpecialOffersFlyer from "../components/Special Offers/Flyer";

const Home = () => {
    return(
        <>
            <Header />
            <PlaceOrderBar />
            <Showcase />
            <Categories />
            <SpecialOffersFlyer />
            <Footer />
        </>
    )
}

export default Home;