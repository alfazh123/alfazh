import { useEffect, useRef } from "react";

interface VideoDemoProps {
    url: string;
    mobile: boolean;
    playbackRate?: number;
}

export default function VideoDemo({
    url, mobile, playbackRate
}: VideoDemoProps){
    const video = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const element = video.current;
        if (!element) return;

        if (playbackRate) {
            element.play();
            element.playbackRate = playbackRate;
        }
    }, [])

    return (
        <video src={url} ref={video} autoPlay muted loop playsInline controls width={mobile ? "30%" : "100%"} className='video-demos mx-auto'></video>
    )
}