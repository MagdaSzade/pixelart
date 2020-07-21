  
import axios from 'axios';

export const baseURL = 'http://localhost:9090/api/art';
export const BaseURLFacebook = 'google.com';

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

export const getArt = async (id) => {
    const response = await axios.get(`${baseURL}/find/${id}`)
    return response.data;
}
