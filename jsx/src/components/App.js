import React, {useEffect, useState} from 'react';
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos("our songs");

    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])
    // setSelectedVideo(response.data.items[0]);


    return (
        <div>
            <div className="ui container">
                <SearchBar onFormSubmit={search}/>
                <div className="ui grid">
                    <div className="ui row">

                        <div className="eleven wide column">
                            <VideoDetail video={selectedVideo}/>
                        </div>

                        <div className="five wide column">
                            <VideoList onVideoSelect={setSelectedVideo} videos={videos}/>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default App;
/*


class App extends React.Component {


    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">

                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>

                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

App.propTypes = {};

export default App;
*/
