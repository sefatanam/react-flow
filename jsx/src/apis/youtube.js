import axios from "axios";

const KEY = 'AIzaSyDokDisXqm5l4tVLkLzEpCZK11IfAMj1qo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key : KEY,
    }
})
