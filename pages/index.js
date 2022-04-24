import Menu from "../components/Menu"
import Categories from "../components/UserInterface/Categories";
import Header from "../components/UserInterface/Header";
import Showcase from "../components/UserInterface/Showcase";

const Home = () => {
    return(
        <>
        <Header />
        <Menu />
        <Showcase />
        <Categories />
        </>
    )
}

export default Home;