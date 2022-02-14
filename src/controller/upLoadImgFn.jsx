import axios from "axios";

const upLoadImgFn = function(myAccount, setMyAccount) {
    const imgUrl = localStorage.getItem('image')
    const arr = { ...myAccount };
        arr.imagePath = axios.defaults.baseURL + imgUrl;
        localStorage.setItem('myInfo', JSON.stringify(arr));
        setMyAccount(arr);
    const body = {
        imagePath: imgUrl
    }
    axios.patch(`${axios.defaults.baseURL}/api/users`, body)
    .then(res => {
        console.log(res);
        console.log("이미지가 " + res.data.message);
        localStorage.removeItem('image');
    })
    .catch(err => console.log(err));
}

export default upLoadImgFn