import axios from "axios";

// 로그아웃 함수.
const logoutFn = function (history, dispatch) {
    axios
        .post(`/api/auth/logout`)
        .then((res) => {
            console.log(res.data.message);
            dispatch({ type: "LOGOUT", payload: null });
            const removeArr = [...Object.keys(localStorage)].filter((list) =>
                list.includes("chatContents")
            );
            removeArr.map((list) => localStorage.removeItem(list));
            history.replace("/");
        })
        .catch((err) => {
            console.log(err);
            console.log("에러 대체 로그아웃.");
            history.replace("/");
        });
};

export default logoutFn;
