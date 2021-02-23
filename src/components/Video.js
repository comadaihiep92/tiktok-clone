import React, { useRef, useState } from 'react';
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

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
            src="https://v9-vn.tiktokcdn.com/e28454e878f2684a2743cbc91bdf11af/6034c665/video/tos/alisg/tos-alisg-pve-0037c001/0135cb86bd7845db8e9d247fc166e9af/?a=1180&br=1518&bt=759&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=202102230307260101150452321E00518A&lr=tiktok&mime_type=video_mp4&pl=0&qs=0&rc=M3M4eW1nZDU6eTMzNDgzM0ApZzRoNTNlOWVlN2VkNzk0aGdmZmtjNDNecmhfLS0xLzRzc15hLTMyMTJgMWIxXjAuLmM6Yw%3D%3D&vl=&vr="></video>
            <VideoFooter channel="windreviewphim" description="Con bò bá đạo nhất hệ mặt trời" song="haha hohoho có con bò kéo xe kìa!"/>
            <VideoSidebar likes="2000" comments="500" shares="400"/>
        </div>
    );
}

export default Video;