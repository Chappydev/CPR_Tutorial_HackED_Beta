import {useState, useEffect} from 'react';
import {getVideoFrame} from '../api/video.js';
import {PyScriptProvider, PyScript} from 'pyscript-react';

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
            <PyScriptProvider>
                <PyScript
                    source="/test-pyscript.py"
                    pyConfigProps={{
                        type: "json",
                        packages: new Set(["opencv-python", "cvzone"]),
                    }}
                />
            </PyScriptProvider>
            <h1>Video Test Page</h1>
            <img src={source}/>
        </div>
    )
}

export default VideoPage;
