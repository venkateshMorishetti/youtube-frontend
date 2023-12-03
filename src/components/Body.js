
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import HamburgerSideBarMenu from "./HamburgerSideBarMenu";
import { Outlet } from "react-router-dom";
const Body = () =>{
    const isHamburgerMenuShown = useSelector((store)=> store.appconfig.displayHamburgerMenu)
    return (
        <div className="body flex">
            <div className={!isHamburgerMenuShown?"w-1/6":""}>
            {isHamburgerMenuShown?<HamburgerSideBarMenu />: <Sidebar />}
            </div>
            <div className={!isHamburgerMenuShown?"w-5/6":"w-screen"}>
            {/* <MainContainer /> */}
            <Outlet />
            </div>
        </div>
    )
}

export default Body;