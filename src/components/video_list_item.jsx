import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} className="media-object"/>
            </div>

            <div className="media-body">
                <div className="media-heading">
                    {video.snippet.title}
                </div>
            </div>
        </li>
    )
};

export default VideoListItem;