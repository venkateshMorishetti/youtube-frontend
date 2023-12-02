
import moment from "moment";
import { useSelector } from "react-redux";

const VideoCard = ({data}) => {
    const isHamburgerMenu = useSelector((store)=>store.appconfig.displayHamburgerMenu);
    const getPublshedDateTitle = () => {
        const publishedDate = new Date(data.snippet.publishedAt);
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
    return (
        <div className={isHamburgerMenu?"w-72 mx-8 my-2":"w-72 m-2"}>
            {
                isHamburgerMenu?<img src={data.snippet.thumbnails.maxres.url} alt={data.snippet.title} className="rounded-lg"/>
                :<img src={data.snippet.thumbnails.medium.url} alt={data.snippet.title} className="rounded-lg"/>
            }
            
            <div className="font-bold pt-3">{data.snippet.title}</div>
            <div className="flex pt-1">
                <div className="text-sm text-gray-700">{data.statistics.viewCount} views</div>
                <div className="text-sm text-gray-700 pl-4">{getPublshedDateTitle()}</div>
            </div>
        </div>
    )
}


export default VideoCard;