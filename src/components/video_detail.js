import React from 'react';

const videoDetail = ({ video }) => {
    // React wants to render instantly, some parent objects can't fetch info fast enough
    // to satisfy child needs, to handle this case, I'll add check here to make sure videos are added in props before it attempts to render
    if (!video) {
        return (
            <div>
                <i className = "fa fa-refresh fa-spin"></i>
            </div>
        );
    }
    //setTimeout('', 10000);
    //<button className="btn btn-lg btn-warning"><span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading .. </button>

    const videoId = video.id.videoId;
    //const url = 'https://www.youtube.com/embed/' + videoId;
    // ES6 majic for the above url
    const url = `https://www.youtube.com/embed/${ videoId }`;

    return (
        <div className = "video-detail col-md-12">
            <div className = "embed-responsive embed-responsive-16by9">
                <iframe className = "embed-responsive-item" src = { url }>
                </iframe>
            </div>
            <div className = "details">
                <div> { video.snippet.title } </div>
            </div>
        </div>
    )
};

export default videoDetail;
