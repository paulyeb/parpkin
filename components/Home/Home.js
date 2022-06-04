import {Header, PlaceOrderBar, Footer, MetaData, Backdrop, Dropdown} from "../Layout";
import Showcase from "./Showcase";
import Categories from "../Categories/Categories";
import SpecialOffersFlyer from "../Special Offers/Flyer";
import { useContext } from "react";
import { dropdownContext } from "../../store/dropdown-context";

const Home = () => {
    const {state} = useContext(dropdownContext);

    return(
        <>
            <MetaData title={`Parpkin Shawarma-Burger-Pizza-Fries`} />
            <Header />
            {state.state ? <Dropdown />: null}
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