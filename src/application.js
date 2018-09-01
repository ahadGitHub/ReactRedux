import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBarC from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// token from console.developers.google.com
const API_KEY = 'AIzaSyB85Sx8OgT7pO-sD__qeR7aB38Uc7gKmAM';

// I pass some configuration option to YTSearch function
// and then the call back function
/*
const result = YTSearch({ key: API_KEY, term: 'Messi'}, (data) => {
    console.log(data);
});
 */

// 1 - Create a component
// 2 - export the component or piece of it
// 3 - import the component
// 4 - render the component

/*
 * ES6 Code here
 * New component that produces an Html
 */
/*
const App = () => {
    return <div>HOWDY FROM REACT !!</div>;
}
 * this is the same like
 * const App = function() {
 *     return <div>HI !!</div>
 * }
 */

/*
 * A new syntax of ES6 of the above component
 * with a 'fat arrow'
 */
/*
const App = () => {
    return (
        <div> REACT REDUX
            <br />
            <br />
            <br />
            <br />
            <SearchBarC />
        </div>
    );
};
 */

// Refactoring the above Functional component to Class component,
// so that the App kepps track of the list of videos, I can achieve this by recording them on the " state "
class App extends Component {
    constructor(props) {
        super(props);

        // I am adding the concept of selected video now (after video was streamed)
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.VideoSearch('Lexus SC 400');
    }

    VideoSearch(term) {
        // to populate, before the user inputs some value
        YTSearch({ key: API_KEY, term: term}, (youTubeVideos) => {
            this.setState({
                videos: youTubeVideos,
                selectedVideo: youTubeVideos[0]
            });
            // if call back function had an argument videos (similar to the key)
            // this.setState({ videos });
        });
    }

    render() {
        const clickedVideo = (selectedVideo) => {
            this.setState({
                selectedVideo: selectedVideo
            })
        }
        const videoSearch = _.debounce((term) => { this.VideoSearch(term) }, 300);

        return (
            <div>
                <SearchBarC onSearchTermChange = { videoSearch }/>
                <br />
                <VideoDetail video = { this.state.selectedVideo }/>
                <VideoList
                    onVideoSelect = { clickedVideo }
                    videos = { this.state.videos }
                />
                <div>.</div>
            </div>
            // when I do this <VideoList videos = { this.state.videos }/>, I am passing data from App to VideoList
            // it's refered to as passing props => I am passing prop videos to VideoList
            // anytime App re-renders (set state on the component) VideoList gets the new video lists
        );
    }
}

/*
 * Take this component's generated Html and shove it into the DOM
 * Render the App component and put it in 'container' ( a div class from index.html )
 * I have to make an instance of the component then after I can send it to ReactDom - to do so I can add tag ( < /> )
 */
ReactDom.render(<App />, document.querySelector('.container'));
