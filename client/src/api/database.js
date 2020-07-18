  
import axios from 'axios';

const baseURL = 'http://localhost:9090/api/art';

export const sendArt = async (pixels, width) => {
    const response = await axios.post(`${baseURL}/saveArt`, {
        pixels,
        width
    });
    return response;
};

export const checkIfPaid = async (id) => {
    const response = await axios.get(`${baseURL}/isPaid/${id}`);
    return response.data.isPaid;
}
