import axios from 'axios';

const imageOutputFn = function(url) { 
    let path = url.split('/');
        if (path[1] === 'img') {
            const lastSpelling = path[2][path[2].length-1];
            if (lastSpelling === ('p' || 'n')) {
                url = axios.defaults.baseURL + url + 'g';
            } else return url = axios.defaults.baseURL + url;
        }
        return url;
}

export default imageOutputFn