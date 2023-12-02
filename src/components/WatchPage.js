import { useSearchParams } from "react-router-dom";
const WatchPage = () =>{
    const [searchParam] = useSearchParams();
    console.log(searchParam.get("v"))
    return(
        <div>
            <iframe width="1200" height="600" src={"https://www.youtube.com/embed/"+searchParam.get("v")+"?si=QN6Ua-utGYfg962u"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default WatchPage;