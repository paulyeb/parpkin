import Menu from "../components/Menu"
import Categories from "../components/UserInterface/Categories";
import Footer from "../components/UserInterface/Footer";
import Header from "../components/UserInterface/Header";
import Showcase from "../components/UserInterface/Showcase";

const Home = () => {
    return(
        <>
            <Header />
            <Menu />
            <Showcase />
            <Categories />
            <Footer />
        </>
    )
}

export default Home;