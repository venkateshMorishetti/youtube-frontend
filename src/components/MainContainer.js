import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
const MainContainer = () =>{
    return (
        <div className="mainContainer overflow-y-scroll h-screen">
            <ButtonList />
            <VideoContainer />
        </div>
    )
}

export default MainContainer;