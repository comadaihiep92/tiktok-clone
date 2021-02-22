import React, { useRef, useState } from 'react';
import './Video.css'
import VideoFooter from './VideoFooter';

function Video(props) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
            <video loop
            onClick={onVideoPress}
            ref={videoRef}
            className="video__player" 
            src="https://v16.tiktokcdn.com/95be9ffc5226c3b3de2c815a01f06469/6033ab4c/video/tos/alisg/tos-alisg-pve-0037/1e274b99c13a4afc8ab019e8a8659c77/?a=1180&br=2556&bt=1278&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=202102220701520102341080983A010C76&lr=tiktok&mime_type=video_mp4&pl=0&qs=0&rc=MzhqOGY7dXhnMzMzaTgzM0ApaTk4Mzk7ZGRlNzU6ZGY4OWcwY28uLi9xX2hgLS1hLzRzcy01LS1fYDNjLWNhLS01LjI6Yw%3D%3D&vl=&vr="></video>
            <VideoFooter />
        </div>
    );
}

export default Video;