import axios from "axios";

const imageOutputFn = function (url) {
    if (url[0] === "/") {
        url[url.length - 1] !== "g"
            ? (url = axios.defaults.baseURL + url + "g")
            : url[url.length - 1] === "j"
            ? (url = axios.defaults.baseURL + url + "pg")
            : (url = axios.defaults.baseURL + url);
    }
    return url;
};

export default imageOutputFn;
