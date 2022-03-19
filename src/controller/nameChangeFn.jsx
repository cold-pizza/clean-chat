import axios from "axios";

// 클릭시 이름 변경하는 함수.
const nameChangeFn = async function (myAccount, nickName, dispatch) {
    const data = {
        name: nickName.name,
    };
    axios
        .patch(`/api/users`, data)
        .then((res) => {
            // console.log(res.data.message);
            const arr = { ...myAccount };
            arr.name = nickName.name;
            dispatch({ type: "SET_MY_ACCOUNT", payload: arr });
        })
        .catch((err) => {
            console.log(err);
        });
};

export default nameChangeFn;
