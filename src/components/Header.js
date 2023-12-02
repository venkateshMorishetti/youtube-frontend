import './Header.css';
import { HAMBURGER_MENU_ICON, YOUTUBE_LOGO, USER_ICON } from '../utility/constants';
import { useDispatch } from 'react-redux';
import { updateToHamburgerMenu } from '../utility/appConfigSlice';
import ButtonList from './ButtonList';
const Header = () =>{
    const dispatch = useDispatch();
    const switchToHamBurgerMenu = () =>{
        console.log("switching to hamburger menu");
        dispatch(updateToHamburgerMenu());
    }
    return (
        <div className="grid grid-flow-col m-4 ">
            <div className="col-span-1 flex">
                <img className="h-12 cursor-pointer"
                src={HAMBURGER_MENU_ICON}  onClick={switchToHamBurgerMenu}
                alt="sidebar icon" />
                <img className="h-20 -my-4 padding-left-20 cursor-pointer" src={YOUTUBE_LOGO} alt="youtube logo" />
            </div>
            <div className="col-span-10 content-center">
                <input className="border-2 border-gray-300 rounded-l-full w-1/2 h-12 px-6 -margin-left-85" type="text" placeholder="Search" />
                <button className="border-2  border-gray-300 bg-gray-200 rounded-md rounded-r-full h-12 p-2">Search</button>
            </div>
            <div className="col-span-1 content-end">
            <img className = "h-12 cursor-pointer" src={USER_ICON} alt="user info icon"/>
            </div>
           
        </div>
    )
}

export default Header;