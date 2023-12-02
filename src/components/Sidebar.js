import "./Sidebar.css";
import {addSubscription, removeSubscription, updateIsAllSubscriptionsShown} from "../utility/subscribtionSlice";
import {useDispatch} from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {MAIN_HEADERS, YOU_OPTIONS, SUBSCRIPTIONS, MORE_FROM_YOUTUBE_OPTIONS, OTHER_OPTIONS} from "../utility/constants";
const Sidebar = () =>{

    const dispatch = useDispatch();

    const subscriptionsFromStore = useSelector((store) => store.subscriptions.channels);
    const isAllSubscriptionsShownToggle = useSelector((store) => store.subscriptions.isAllSubscriptionsShown);

    useEffect(()=>{
        console.log("calling")
        addTop8SubscriptionsToStore();
    }, [])

    const addTop8SubscriptionsToStore = () =>{
        let temp = [];
        for(let i = 0; i < 8; i++){
            temp.push(SUBSCRIPTIONS[i]);
        }
        dispatch(addSubscription(temp));

    }

    const showFullSubscrbtionsList = () =>{
        if(isAllSubscriptionsShownToggle == false){
            dispatch(removeSubscription());
            dispatch(addSubscription(SUBSCRIPTIONS));
            dispatch(updateIsAllSubscriptionsShown());
        }else{
            dispatch(removeSubscription());
            addTop8SubscriptionsToStore();
            dispatch(updateIsAllSubscriptionsShown());
        }
    }
    
    return(
        <div className="sidebar text-lg overflow-y-scroll h-screen w-72"> 
            <ul>
                {MAIN_HEADERS.map((item, index) => (
                    <li key={index} className="py-3 pl-12 pr-4 cursor-pointer menu-item flex">

                        <img src={item.icon}  className="h-6 pl-2 pr-6"></img>
                        {item.label}
                    </li>
                ))}
            </ul>
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <h1 className="py-2 header-size font-bold pl-8" >You</h1>
            <ul>
                {YOU_OPTIONS.map((item, index) => (
                      <li key={index} className="py-3 pl-12 pr-4 cursor-pointer menu-item flex">

                      <img src={item.icon}  className="h-6 pl-2 pr-6"></img>
                      {item.label}
                  </li>
                ))}
            </ul>
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <h1 className="py-2 header-size font-bold pl-8" >Subscriptions</h1>
            <ul>
                {subscriptionsFromStore.map((item, index) => (
                    <li key={index} className="py-3 pl-12 pr-4 cursor-pointer menu-item flex">

                        <img src={item.icon}  className="h-6 pl-2 pr-6"></img>
                        {item.label}
                    </li>
                ))}
                
            </ul>
            <div className="flex cursor-pointer pl-8" onClick={showFullSubscrbtionsList}>
                <div className="py-2 font-medium " >{isAllSubscriptionsShownToggle?"Show Less":"Show More"}</div>
                <img className="h-4 pl-8 pt-1 mt-14" s src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh-YOPqO0eUupeziUmTGtDuYQgiQeJ1jg31grmry-Qo7pUnTjQvtFRgdXUld0mUv1evw&usqp=CAU"></img>
            </div>
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <ul>
                {MORE_FROM_YOUTUBE_OPTIONS.map((item, index) => (
                    <li key={index} className="py-3 pl-12 pr-4 cursor-pointer menu-item flex">

                    <img src={item.icon}  className="h-6 pl-2 pr-6"></img>
                    {item.label}
                </li>
                ))}
            </ul>
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <ul>
                {OTHER_OPTIONS.map((item, index) => (
                   <li key={index} className="py-3 pl-12 pr-4 cursor-pointer menu-item flex">

                   <img src={item.icon}  className="h-6 pl-2 pr-6"></img>
                   {item.label}
               </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;