import {blobToBase64} from '../utils/utils.js';

export async function getVideoFrame() {
    try {
        const response = await fetch("http://localhost:5000/video-feed");
        if (!response.ok) {
            throw new Error(response.status);
        }

        const blob = await response.blob();
        console.log(blob);
        const base64Image = await blobToBase64(blob);
        console.log(base64Image);

        return base64Image;
    } catch (error) {
        console.error(error);
    }
}
