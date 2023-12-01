import {MAIN_HEADERS} from '../utility/constants';
import './Sidebar.css'
const HamburgerSideBarMenu = () => {

    return (
        <div>
            <ul>
                {MAIN_HEADERS.map((header, index) => {
                    return (
                        <li key={index} className="cursor-pointer mx-4 my-8">
                            <img src={header.icon} className="h-8 pl-4"></img>
                            <div className={header.label==="Subscriptions"?"text-sm":"text-sm pl-3"}>
                                {header.label}
                            </div>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}


export default HamburgerSideBarMenu;