import axios from "axios";

const selectImgFn = function(e, viewImg) {
    const reader = new FileReader();
    reader.onload = function(url) {
        const previewImg = document.createElement('img');
        previewImg.setAttribute('src', url.target.result);
        viewImg.current.appendChild(previewImg);
    }; 
    reader.readAsDataURL(e.target.files[0]);

    const dataFile = new FormData();
    const upLoadFile = e.target.files[0];
    dataFile.append('img', upLoadFile);

    axios.post(`${axios.defaults.baseURL}/api/users/images`, dataFile)
    .then(res => {
        const url = res.data.result.imagePath;
        localStorage.setItem('image', String(url));
        console.log("이미지가 " + res.data.message);
    })
    .catch(err => {
        console.log("이미지 업로드 에러");
        console.log(err);
    })
};

export default selectImgFn