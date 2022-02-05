import axios from 'axios';

const imageOutputFn = function(url) {
    if (url.split('/')[0] === "img") {
        return `${axios.defaults.baseURL}/${url}`;
    } else if (url[url.length - 1] === ('p' || 'n')) {
        return axios.defaults.baseURL + url + 'g';
    } else {
        return axios.defaults.baseURL + url;
    }
}

export default imageOutputFn