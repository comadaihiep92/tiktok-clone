import React from 'react';
import './VideoSidebar.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import { useState } from 'react';

function VideoSidebar({likes, comments, shares}) {
    const [like, setLike] = useState(false);
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {like ? (
                    <FavoriteIcon fontSize="large" onClick= {e => setLike(false)}/>
                ) : (
                    <FavoriteBorderIcon fontSize="large" onClick={e => setLike(true)} />
                )}
                <p>{like ? likes + 1 : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon fontSize="large" />
                <p>{comments}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize="large"/>
                <p>{shares}</p>
            </div>
        </div>
    );
}

export default VideoSidebar;