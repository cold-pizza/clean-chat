import axios from "axios";

// 기본 이미지 설정 함수.
const basicImgChangeFn = function(myAccount, basicImg, dispatch) {
        const data = {
            imagePath: basicImg 
        }
        axios.patch(`/api/users`, data)
        .then(res => {
            console.log(res.data.message);
            dispatch({ type: "SET_MY_ACCOUNT", payload: { ...myAccount, imagePath: basicImg } });
        })
        .catch(err => {
            console.log(err);
        })
    }


export default basicImgChangeFn