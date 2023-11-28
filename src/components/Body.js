import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
const Body = () =>{
    return (
        <div className="body flex">
            <Sidebar />
            <MainContainer />
        </div>
    )
}

export default Body;