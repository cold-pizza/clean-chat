import axios from "axios";

// 채팅방에 추가할 함수.
const addChatingRoomFn = function (users, chatingRoom, dispatch, history) {
    const id = Number(localStorage.getItem("friendsNumber"));
    const body = {
        userId: users[id].id,
    };
    axios
        .post(`/api/chats`, body)
        .then((res) => {
            const result = res.data.result;
            console.log(res.data.message);
            const list = [...chatingRoom];
            const num = list.filter(
                (list) => list.chatUsers[0].id === users[id].id
            );
            if (res.data.message === "이미 채팅방이 존재합니다.") {
                history.push(`/chat/chatingroom/${num[0].id}`);
            } else {
                dispatch({ type: "SET_CHATINIGROOM", payload: result });
                localStorage.setItem(`chatContents_${result.id}`);
                history.push(`/chat/chatingroom/${num[0].id}`);
            }
        })
        .catch((err) => {
            console.log("채팅방 생성 에러");
            console.log(err);
        });
    localStorage.removeItem(`friendsNumber`);
};

// export friendsmodal
export default addChatingRoomFn;
