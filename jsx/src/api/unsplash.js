import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID k3mpmdadIO8oBSnJJnHrISCH3Tsh9mdIrGzhhTY8RJ0'
    }
});
