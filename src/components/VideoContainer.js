import { useEffect } from "react"
import { YOUTUBE_VIDEOS_API } from "../utility/constants";
import { addVideos } from "../utility/youTubeVideosSlice";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const dispatch = useDispatch();
    const homePageVideos = useSelector((store)=>store.youTubeVideos.videos)
    const getVideos =() =>{
        fetch(YOUTUBE_VIDEOS_API)
        .then(response => response.json())
        .then((data) =>{ 
            dispatch(addVideos(data.items))
        })
    }
    useEffect(()=>{
        getVideos();
    }, [])
    return (
        <div className="video-container flex flex-wrap mt-4">
            {homePageVideos.map((item, index)=>(
                <Link to={"/watch?v="+item.id}><VideoCard data={item} key={item.id} /></Link>
            ))}
        </div>


    )
}

export default VideoContainer