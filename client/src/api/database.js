  
import axios from 'axios';

export const baseURL = '/api/art';
//export const baseURL = 'http://localhost:9090/api/art';
export const BaseURLFacebook = 'pixelartagainstsma.herokuapp.com';

export const sendArt = async (pixels, width) => {
    try {
        const response = await axios.post(`${baseURL}/saveArt`, {
            pixels,
            width
        });
        return response;
    } catch (err) {
        return null;
    };
};

export const checkIfPaid = async (id) => {
    const response = await axios.get(`${baseURL}/isPaid/${id}`);
    return response.data.isPaid;
}

export const getArt = async (id) => {
    try {
        const response = await axios.get(`${baseURL}/find/${id}`);
        return response;
    } catch (err) {
        return null;
    }
}
