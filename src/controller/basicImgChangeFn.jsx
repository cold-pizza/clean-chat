import axios from "axios";

// 기본 이미지 설정 함수.
const basicImgChangeFn = function(myAccount, basicImg, dispatch) {
        const data = {
            imagePath: basicImg 
        }
        axios.patch(`/api/users`, data)
        .then(res => {
            console.log(res.data.message);
            const arr = { ...myAccount };
            arr.imagePath = basicImg;
            localStorage.setItem('myInfo', JSON.stringify(arr));
            dispatch({ type: "SET_MY_ACCOUNT", payload: JSON.parse(localStorage.getItem('myInfo')) });
        })
        .catch(err => {
            console.log(err);
        })
    }


export default basicImgChangeFn