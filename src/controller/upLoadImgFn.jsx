import axios from "axios";

const upLoadImgFn = function(imgUrl, myAccount, setMyAccount, selectImgSwitch, setSelectImgSwitch) {
    const arr = { ...myAccount };
        arr.imagePath = axios.defaults.baseURL + imgUrl;
        localStorage.setItem('myInfo', JSON.stringify(arr));
        setMyAccount(arr);
        // console.log(imgUrl);
    const body = {
        imagePath: imgUrl
    }
    axios.patch(`${axios.defaults.baseURL}/api/users`, body)
    .then(res => {
        console.log(res);
        console.log(res.data.result.imagePath);
        console.log("이미지가 " + res.data.message);
        setSelectImgSwitch(!selectImgSwitch);
    })
}

export default upLoadImgFn