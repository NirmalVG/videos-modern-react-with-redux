import axios from "axios";

const KEY = "AIzaSyAdDyGaL4Ysx89ql976lz4qZvPwUwQxi20";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
    },
});
