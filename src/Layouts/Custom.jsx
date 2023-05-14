import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";


const Custom = () => {
    return (
        <div>
            <Header></Header>
            <div className="flex flex-col min-h-screen">
            <Outlet></Outlet>
            </div>
            <div className="">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Custom;