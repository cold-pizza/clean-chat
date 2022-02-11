import axios from 'axios';

const imageOutputFn = function(url) {
    try {
        if (url.split('/')[0] === "img") {
            return `${axios.defaults.baseURL}/${url}`;
        } else if (url[url.length - 1] !== "g") {
            return axios.defaults.baseURL + url + 'g';
        } else {
            return axios.defaults.baseURL + url;
        }
    }
    catch(err) {
        console.error(err);
    }
}

export default imageOutputFn