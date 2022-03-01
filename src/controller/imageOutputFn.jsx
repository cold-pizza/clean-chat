import axios from "axios";

const imageOutputFn = function (url) {
    if (url[0] === "/") {
        url[url.length - 1] !== "g"
            ? (url = axios.defaults.baseURL + url + "g")
            : (url = axios.defaults.baseURL + url);
    }
    return url;
};

export default imageOutputFn;
