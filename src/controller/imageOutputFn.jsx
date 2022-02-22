import axios from 'axios';

const imageOutputFn = function(url) {
    return url[0] === '/' ? url = axios.defaults.baseURL + url : url;
}

export default imageOutputFn