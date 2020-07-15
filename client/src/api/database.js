  
import axios from 'axios';

const baseURL = 'http://localhost:9090/api/art/saveArt';

export const sendArt = async (pixels, width) => {
    const response = await axios.post(`${baseURL}`, {
        pixels,
        width
    });
    return response;
};

