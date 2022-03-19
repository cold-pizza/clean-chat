import axios from "axios";

const msgRemoveFn = function (chatId, msgId) {
    axios
        .post(`/api/chats/${chatId}/messages/${msgId}`)
        .then((res) => {
            // console.log(res.data.message);
        })
        .catch((err) => {
            console.log(err);
            console.log("메시지 삭제 요청 에러");
        });
};

export default msgRemoveFn;
