import axios from "axios"
// import myChatArrangeFn from "./myChatArrangeFn";
// import otherChatArrangeFn from "./otherChatArrangeFn";

const chatMsgSearchFn = function(chatingRoom) {
    for (let i = 0; i < chatingRoom.length; i++) {
        axios.get(`${axios.defaults.baseURL}/api/chats/${chatingRoom[i].id}/messages`)
        .then(res => {
            console.log(`${i}번째 ` + res.data.message);
            console.log(res.data.result);
            if (res.data.result[0].ChatContents !== null) {
                const chatContents = res.data.result[0].ChatContents;
                localStorage.setItem(`chatContents_${i}`, JSON.stringify(chatContents.reverse()));
            } else {
                return console.log(`${i}번째 채팅은 없습니다.`);
            }
        })
        .catch(err => {
            console.log("채팅조회 에러\n" + err);
        })
    }
}

export default chatMsgSearchFn