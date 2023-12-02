import { useEffect } from "react"
import { YOUTUBE_VIDEOS_API } from "../utility/constants";
import { addVideos } from "../utility/youTubeVideosSlice";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
    const dispatch = useDispatch();
    const homePageVideos = useSelector((store)=>store.youTubeVideos.videos)
    const getVideos =() =>{
        fetch(YOUTUBE_VIDEOS_API)
        .then(response => response.json())
        .then((data) =>{ 
            let videos = [];
            if(data.items.length < 50){
                let len  = data.items.length;
                while(len < 100){
                    for(let i = 0; i < data.items.length; i++){
                        videos.push(data.items[i]);
                    }
                    len = videos.length;
                }
            }
            dispatch(addVideos(videos))
        })
    }
    useEffect(()=>{
        getVideos();
    }, [])
    return (
        <div className="video-container flex flex-wrap mt-4">
            {homePageVideos.map((item, index)=>(
                <VideoCard data={item} key={index} />
            ))}
        </div>


    )
}

export default VideoContainer