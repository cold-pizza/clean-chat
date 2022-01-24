import axios from "axios";

// 기본 이미지 설정 함수.
const basicImgChangeFn = function(myAccount, setMyAccount, basicImg) {
    if (myAccount.imagePath !== basicImg) {
        const data = {
            imagePath: basicImg
        }
        axios.patch(`${axios.defaults.baseURL}/api/users`, data)
        .then(res => {
            console.log(res.data.message);
            const arr = { ...myAccount };
            arr.imagePath = basicImg;
            localStorage.setItem('myInfo', JSON.stringify(arr));
            setMyAccount(arr);
        })
        .catch(err => {
            console.log(err);
        })
    }
    }

export default basicImgChangeFn