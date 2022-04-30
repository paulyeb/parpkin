import Header from "../components/Layout/Header";
import PlaceOrderBar from "../components/Layout/PlaceOrderBar";
import SpecialOffers from "../components/Special Offers/SpecialOffers"
import Footer from "../components/Layout/Footer";
import MetaData from "../components/Layout/MetaData";

const SpecialOffersPage = () => {
    return(
        <>
            <MetaData title={`Parpkin | Special Offers`} />
            <Header />
            <PlaceOrderBar />
            <SpecialOffers />
            <Footer />
        </>
    )
}

export default SpecialOffersPage;