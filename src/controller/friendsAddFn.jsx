import axios from "axios";
import imageFilterFn from "./imageFilterFn";

const friendsAddFn = function (id, dispatch, basicImg) {
    const body = {
        userId: id,
    };
    axios
        .post(`/api/friends`, body)
        .then((res) => {
            console.log("친구가 " + res.data.message);
            axios
                .get(`/api/friends`)
                .then(async (res) => {
                    // console.log(res);
                    const friend = await axios.get(`/api/friends`);
                    const friends = imageFilterFn(friend.data.result, basicImg);
                    dispatch({ type: "SET_USERS", payload: friends });
                })
                .catch((err) => {
                    console.log(err);
                    console.log("조회 에러");
                });

            console.log(res.data.message);
        })
        .catch((err) => {
            console.log(err);
            console.log("친구 등록 에러");
        });
};

export default friendsAddFn;
