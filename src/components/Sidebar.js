import "./Sidebar.css";
const Sidebar = () =>{
    return(
        <div className="sidebar p-9 text-lg h-screen overflow-y-scroll"> 
            <ul>
                <li className="py-2">Home</li>
                <li className="py-2">Shorts</li>
                <li className="py-2">Subscriptions</li>
            </ul>
            <h1 className="py-2 header-size font-bold" >You</h1>
            <ul>
                <li className="py-2">Your channel</li>
                <li className="py-2">History</li>
                <li className="py-2">Your videos</li>
                <li className="py-2">Watch Later</li>
                <li className="py-2">Liked videos</li>
            </ul>
            <h1 className="py-2 header-size font-bold" >Subscriptions</h1>
            <ul>
                <li className="py-2">Aditya Music India</li>
                <li className="py-2">WION</li>
                <li className="py-2">T-series</li>
                <li className="py-2">Think School</li>
                <li className="py-2">Mango Music</li>
                <li className="py-2">Entra idhi</li>
                <li className="py-2">Aditya Music India</li>
                <li className="py-2">WION</li>
                <li className="py-2">T-series</li>
                <li className="py-2">Think School</li>
                <li className="py-2">Mango Music</li>
                <li className="py-2">Entra idhi</li>
            </ul>
        </div>
    )
}

export default Sidebar;