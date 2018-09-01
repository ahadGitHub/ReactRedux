import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    // pulling off video property from video_list
    // instead of writing 
    // const VideoListItem = (props) { ... }, and then 

    // const video = props.video;
    // const onVideoSelect = props.onVideoSelect

    // => I can replace props parameter with property - that's an ES6 way

    console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;
    
    return (
        <li className = "list-group-item" onClick = { () => onVideoSelect(video) }>
            <div className = "video-list media">
                <div className = "media-left">
                    <img className = "media-object" src = { imageUrl }/>
                </div>

                <div className = "media-body  col-md-12">
                    <div className = "media-heading"> { videoTitle } </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
