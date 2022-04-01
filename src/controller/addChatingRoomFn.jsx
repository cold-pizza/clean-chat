import axios from "axios";

// 채팅방에 추가할 함수.
const addChatingRoomFn = function (users, chatingRoom, dispatch, history) {
    const id = Number(localStorage.getItem("friendsNumber"));
    const data = {
        userId: users[id].id,
    };
    axios
        .post(`/api/chats`, data)
        .then((res) => {
            const result = res.data.result;
            console.log(res.data.message);
            console.log(result.id);
            axios.get(`/api/chats`).then((res) => {
                dispatch({ type: "SET_CHATINGROOM", payload: res.data.result });
                localStorage.setItem(`chatContents_${result.id}`, null);
                history.push(`/chat/chatingroom/${result.id}`);
            });
        })
        .catch((err) => {
            console.log("채팅방 생성 에러");
            console.log(err);
        });
    localStorage.removeItem(`friendsNumber`);
};

// export friendsmodal
export default addChatingRoomFn;
