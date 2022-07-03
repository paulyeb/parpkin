import { useContext } from "react";
import { dropdownContext } from "../../store/dropdown-context";
import { Header, PlaceOrderBar, Footer, MetaData, Dropdown } from "../Layout";
import SpecialOfferItem from "../Special Offers/SpecialOfferItem";

const SpecialOffers = () => {
    const {state} = useContext(dropdownContext);
    return(
        <>
            <MetaData title={`Parpkin | Special Offers`} />
            <Header />
            {state.dropdown ? <Dropdown /> : null}
            <PlaceOrderBar />
            <SpecialOfferItem />
            <Footer />
        </>
    )
}

export default SpecialOffers;