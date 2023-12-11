import './Header.css';
import { HAMBURGER_MENU_ICON, YOUTUBE_LOGO, USER_ICON , YOUTUBE_SUGGESTIONS_API} from '../utility/constants';
import { useDispatch } from 'react-redux';
import { updateToHamburgerMenu } from '../utility/appConfigSlice';
import { useState} from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { addSearchResult, getSearchResult } from '../utility/searchResults';
const Header = () =>{
    const [searchValue, setSearchValue] = new useState("");
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const dispatch = useDispatch();
    const searchResultCache = useSelector(store => store.searchResults);
    const switchToHamBurgerMenu = () =>{
        dispatch(updateToHamburgerMenu());
    }

    useEffect(()=>{
        //debouncing , cached search result to avoid api calls
       const timer = setTimeout(()=>{
        if(searchResultCache.results[searchValue]!= undefined){
            console.log("already in cache", searchResultCache[searchValue]);
            setSearchSuggestions(searchResultCache.results[searchValue]);
        }else{
            searchQuery();
        }
       }, 500)

       return () =>{
        clearTimeout(timer);
       }
    }, [searchValue])

    const searchQuery = () =>{
        fetch(YOUTUBE_SUGGESTIONS_API + searchValue).
        then(response => response.json()).then(
            (data) =>{
                setSearchSuggestions(data[1]);
                if(searchValue == ""){
                    return;
                }
                dispatch(addSearchResult({query: searchValue, results: data[1]}));
            }
        )
        
    }
    const getSearchResults = () =>{

    }
    return (
        <div className="grid grid-flow-col m-4 ">
            <div className="col-span-1 flex">
                <img className="h-12 cursor-pointer"
                src={HAMBURGER_MENU_ICON}  onClick={switchToHamBurgerMenu}
                alt="sidebar icon" />
               <img className="h-20 -my-4 padding-left-20 cursor-pointer" src={YOUTUBE_LOGO} alt="youtube logo"/>
            </div>
            <div className="col-span-10 content-center flex flex-col justify-center ml-96 ">
                <div>
                    <input  className="border-2 border-gray-300 rounded-l-full w-1/2 h-12 px-6 -margin-left-85" type="text" placeholder="Search" onChange={(e)=>{
                        setSearchValue(e.target.value);
                    }} 
                    onFocus={() => setShowSuggestions(true)} 
                    onBlur= {() => setShowSuggestions(false)}/>
                    <button className="border-2  border-gray-300 bg-gray-200 rounded-md rounded-r-full h-12 p-2">Search</button>
                </div>
                <div className='bg-white fixed margin-top-26rem w-[34rem] ml-[-85px] pl-8' >
                    {
                        searchSuggestions.map((item, index)=>{
                            return (
                                showSuggestions && ( <div className='pt-2 text-lg font-medium hover:bg-gray-200' onClick={getSearchResults()}>
                                    <p>{item}</p>
                                </div>)
                            )
                        })
                    }
                </div>
            </div>
            <div className="col-span-1 content-end">
            <img className = "h-12 cursor-pointer" src={USER_ICON} alt="user info icon"/>
            </div>
           
        </div>
    )
}

export default Header;