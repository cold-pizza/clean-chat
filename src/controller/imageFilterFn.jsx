import axios from 'axios';
const imageFilterFn = function(arr, basicImg) {
    let array = [...arr];
    for (let i = 0; i < array.length; i++) {
      if (array[i].imagePath.length < 5) {
        array[i].imagePath = basicImg;
      } else {
        let url = array[i].imagePath;
        let path = url.split('/');
        const lastSpelling = path[2][path[2].length-1];
            if (lastSpelling !== "g") {
                url = axios.defaults.baseURL + url + 'g';
            } else 
            return url = axios.defaults.baseURL + url;
      }
    }
    return array;
  }

  export default imageFilterFn