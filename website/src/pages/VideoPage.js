import {useState, useEffect} from 'react';
import {getVideoFrame} from '../api/video.js';

function VideoPage() {
    const [source, setSource] = useState("");
    useEffect(() => {
        (async () => {
            const imageUrl = await getVideoFrame();
            console.log(imageUrl);
            setSource(imageUrl);
        })();
    });
    return (
        <div>
            <h1>Video Test Page</h1>
            <img src={source}/>
        </div>
    )
}

export default VideoPage;
