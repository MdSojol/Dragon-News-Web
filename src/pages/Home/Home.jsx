import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import TextSlider from "../Header/TextSlider";
import NavBar from "../NavBar/NavBar";
import LeftSideNavBar from "./LeftSideNavBar";
import RightSideNavBar from "./RightSideNavBar";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TextSlider></TextSlider>
            <div className="mb-3">
                <NavBar></NavBar>
            </div>

            <div className="grid grid-cols-4">
                <div className="border">
                    <LeftSideNavBar></LeftSideNavBar>
                </div>
                <div className="col-span-2 border">
                    <Outlet></Outlet>
                </div>
                <div className="border">
                    <RightSideNavBar></RightSideNavBar>
                </div>
            </div>


        </div>
    );
};

export default Home;