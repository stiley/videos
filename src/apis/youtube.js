import axios from 'axios';
const KEY = "AIzaSyDm5s5_ZfSJjTybEAEs0CMG99JEq4RhUBk";


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
})

