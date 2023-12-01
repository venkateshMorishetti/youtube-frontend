
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import HamburgerSideBarMenu from "./HamburgerSideBarMenu";
const Body = () =>{
    const isHamburgerMenuShown = useSelector((store)=> store.appconfig.displayHamburgerMenu)
    return (
        <div className="body flex">
            {isHamburgerMenuShown? <HamburgerSideBarMenu />:<Sidebar />}
            
            <MainContainer />
        </div>
    )
}

export default Body;