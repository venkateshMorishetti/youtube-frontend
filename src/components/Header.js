import './Header.css';
const Header = () =>{
    return (

        <div className="grid grid-flow-col m-4 ">
            <div className="col-span-1 flex">
                <img className="h-12 cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" 
                alt="sidebar icon" />
                <img className="h-20 -my-4 padding-left-20 cursor-pointer" src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg" alt="youtube logo" />
            </div>
            <div className="col-span-10 content-center">
                <input className="border-2 border-gray-300 rounded-l-full w-1/2 h-12 px-6 -margin-left-85" type="text" placeholder="Search" />
                <button className="border-2  border-gray-300 bg-gray-200 rounded-md rounded-r-full h-12 p-2">Search</button>
            </div>
            <div className="col-span-1 content-end">
            <img className = "h-12 cursor-pointer" src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="user info icon"/>
            </div>
        </div>
    )
}

export default Header;