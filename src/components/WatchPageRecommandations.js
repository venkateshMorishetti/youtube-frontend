import { useSelector } from "react-redux";
import moment from "moment";

const WatchPageRecommandations = ()=>{

    const homePageVideos = useSelector((store)=>store.youTubeVideos.videos)
    const isHamburgerMenu = useSelector((store)=>store.appconfig.displayHamburgerMenu);
    
    const getPublshedDateTitle = (youtubeData) => {
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

    return (
        <div className="watch-page-recommandations">
           {homePageVideos.map((data, index)=>(
                <div className="flex mt-4" key={index}>
                    
                    <img src={data.snippet.thumbnails.default.url} alt={data.snippet.title} className="rounded-lg"/>
                    
                    <div className="font-bold pl-3">
                        <div className="text-lg text-ellipsis">{data.snippet.title}</div>
                        <div className="text-md text-gray-400">{data.snippet.channelTitle}</div>
                        <div className="flex pt-1">
                            <div className="text-sm text-gray-700">{data.statistics.viewCount} views</div>
                            <div className="text-sm text-gray-700 pl-4">{getPublshedDateTitle(data)}</div>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    )
}


export default WatchPageRecommandations