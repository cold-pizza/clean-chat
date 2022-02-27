import axios from "axios";

const chatRoomRemoveFn = function (id, dispatch) {
    axios
        .delete(`/api/chats/${id}`)
        .then((res) => {
            console.log(res.data.message);
            axios
                .get(`/api/chats`)
                .then((res) => {
                    dispatch({
                        type: "SET_CHATINGROOM",
                        payload: res.data.result,
                    });
                    console.log(res.data.message);
                })
                .catch((err) => {
                    console.log("호출 문제");
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log("삭제 문제");
            console.log(err);
        });
};

export default chatRoomRemoveFn;
