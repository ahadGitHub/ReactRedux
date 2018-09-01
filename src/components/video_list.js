import React from 'react';

import VideoListItem from './video_list_item';

// if I use the functional component, the props arrive as an argument to the function
// if it was class based component, it would have been "this.props"
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect = { props.onVideoSelect }
                key = { video.etag }
                video = { video }
            />
        );
    });

    return (
        <ul className = "list-group col-md-4">
            { props.videos.length }
            { videoItems }
        </ul>
    );
};

export default VideoList;
