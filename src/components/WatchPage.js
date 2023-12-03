import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { YOUTUBE_VIDEO_DATA } from "../utility/constants";
import { useState } from "react";
import moment from 'moment';
import WatchPageRecommandations from "./WatchPageRecommandations";
import './watchPage.css'


const WatchPage = () =>{
    const [youtubeData, setYoutubeData] = useState(null);
    const [searchParam] = useSearchParams();
    const [displayFullDescription, setdisplayFullDescription] = useState('lessdisplay');

    useEffect(()=>{
        fetch(YOUTUBE_VIDEO_DATA+searchParam.get("v"))
        .then(response => response.json())
        .then((data) =>{
            
            setYoutubeData(data.items[0])
        })
    },[])

    const getPublshedDateTitle = () => {
        if(youtubeData){
        const publishedDate = new Date(youtubeData.snippet.publishedAt);
        const currentDate = new Date();
        const diffTimeInYears = moment(currentDate).diff(publishedDate, 'years');
        if(diffTimeInYears > 0){
            return diffTimeInYears + " years ago";
        }
        const diffTimeInMonths = moment(currentDate).diff(publishedDate, 'months');
        if(diffTimeInMonths > 0){
            return diffTimeInMonths + " months ago";
        }
        const diffTimeInDays = moment(currentDate).diff(publishedDate, 'days');
        if(diffTimeInDays > 0){
            return diffTimeInDays + " days ago";
        }
        const diffTimeInHours = moment(currentDate).diff(publishedDate, 'hours');
        if(diffTimeInHours > 0){
            return diffTimeInHours + " hours ago";
        }
        const diffTimeInMinutes = moment(currentDate).diff(publishedDate, 'minutes');
        if(diffTimeInMinutes > 0){
            return diffTimeInMinutes + " minutes ago";
        }
        const diffTimeInSeconds = moment(currentDate).diff(publishedDate, 'seconds');
        if(diffTimeInSeconds > 0){
            return diffTimeInSeconds + " seconds ago";
        }
        return "Just now";
        }
        return "";
    }

    const displayLessDescription = () => {
        if(displayFullDescription === 'lessdisplay'){
            setdisplayFullDescription('fulldisplay')
        }else{
            setdisplayFullDescription('lessdisplay')
        } 
    }

    return(
        <div className="overflow-y-scroll h-screen flex">
            <div className="w-9/12">
                <iframe width="1200" height="600" src={"https://www.youtube.com/embed/"+searchParam.get("v")+"?si=QN6Ua-utGYfg962u"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div className="mt-4 custom-width">
                    <h1 className="font-bold text-2xl">{youtubeData && youtubeData.snippet.title}</h1>
                    <div className="bg-gray-300">
                        <div className="flex mt-4 rounded-lg">
                            <div className="text-sm font-bold ">{youtubeData && youtubeData.statistics.viewCount} views</div>
                            <div className="text-sm font-bold  pl-4">{getPublshedDateTitle()}</div>
                        </div>
                       
                        <div className=" mt-3">
                           
                            { displayFullDescription=='fulldisplay' ?
                            <>
                            {youtubeData && youtubeData.snippet.description} 
                            <div className="font-bold text-base pl-2 cursor-pointer" onClick={displayLessDescription}>
                                ....show less
                            </div> 
                            </> :
                           <> 
                           <div className="flex">
                           {youtubeData && youtubeData.snippet.description.substring(0,10)}
                            <div className="font-bold text-base pl-2 cursor-pointer" onClick={displayLessDescription}>
                                ....show more
                            </div>
                            </div>
                            </>
                            }
                        </div>
                    </div>

                    <div className="mt-8">
                        <h1 className="text-lg font-bold">comments section</h1>
                    </div>
                </div>

            </div>

            <div className="w-3/12">
                <WatchPageRecommandations />
            </div>
        </div>
    )
}

export default WatchPage;