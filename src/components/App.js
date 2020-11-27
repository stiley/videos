import React from 'react';
import VideoList from './VideoList'
import SearchBar from './SearchBar';
import VideoDetail from "./VideoDetail";

import youTube from '../apis/youtube'


class App extends React.Component{

    state = {videos: [], selectedVideo: null};

    onTermSubmit = async (term) =>{
        // console.log(`onTermSubmit called with ${term}`)
        {/* Create a call to youtube for the data*/}
        const snippets = await youTube.get('/search', {
            params:{
                q: term
            }
        })
        console.log(snippets.data.items);
        this.setState({
            videos: snippets.data.items,
            selectedVideo: snippets.data.items[0]
        });
    }

    componentDidMount() {
        this.onTermSubmit('buildings')
    }

    onVideoSelect = (video) => {
        //console.log('From APP-', video );
        this.setState({selectedVideo: video});
    }

    render(){
        return(
            <div className="container">
                {/*
                    this passes the callback onTermSubmit into the SearchBar
                    which calls back to this component onTermSubmit when the search form is submitted
                */}
                <SearchBar onFormSubmit={this.onTermSubmit} />
                I have {this.state.videos.length} videos for you!
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;