import axios from "axios";

const upLoadImgFn = function (myAccount, dispatch) {
    const imgUrl = localStorage.getItem("image");
    const body = {
        imagePath: imgUrl,
    };
    axios
        .patch(`/api/users`, body)
        .then((res) => {
            const arr = { ...myAccount };
            arr.imagePath = axios.defaults.baseURL + imgUrl;
            dispatch({ type: "SET_MY_ACCOUNT", payload: arr });
            // console.log(res);
            console.log("이미지가 " + res.data.message);
            localStorage.removeItem("image");
        })
        .catch((err) => console.log(err));
};

export default upLoadImgFn;
