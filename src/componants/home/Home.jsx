import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../Footer/Footer";
import Charts from "../chart/Charts";
import Btn from "./Btn/Btn"
// import ReactAwesomebtn from "../reactAwesomeComponant/ReactAwesome"
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet>
            </Outlet>
            <Charts></Charts>
            <Btn></Btn>
            {/* <ReactAwesomebtn></ReactAwesomebtn> */}
            <Footer></Footer>
            
        </div>
    );
};

export default Home;