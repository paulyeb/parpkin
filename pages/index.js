import Header from "../components/UserInterface/Header";
import OrderBar from "../components/Home/OrderBar"
import Showcase from "../components/Home/Showcase";
import Categories from "../components/Home/Categories";
import Footer from "../components/UserInterface/Footer";

const Home = () => {
    return(
        <>
            <Header />
            <OrderBar />
            <Showcase />
            <Categories />
            <Footer />
        </>
    )
}

export default Home;