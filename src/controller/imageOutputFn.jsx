import axios from 'axios';

const imageOutputFn = function(url, basicImg) {
    let path = url.split('/');
        if (url !== basicImg) {
            url = axios.defaults.baseURL + url
        }
        else if (path[1] === 'img') {
            const lastSpelling = path[2][path[2].length-1];
            if (lastSpelling === 'p' || 'n') {
                url = axios.defaults.baseURL + url + 'g';
            }
        }
        return url;
}

export default imageOutputFn