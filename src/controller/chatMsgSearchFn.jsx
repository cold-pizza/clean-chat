import axios from "axios"
const chatMsgSearchFn = function(chatingRoom) {
    for (let i = 0; i < chatingRoom.length; i++) {
        axios.get(`${axios.defaults.baseURL}/api/chats/${chatingRoom[i].id}/messages`)
        .then(res => {
            console.log(`${i}번째 ` + res.data.message);
            if (res.data.result[0]?.ChatContents) {
                const chatContents = res.data.result[0].ChatContents;
                localStorage.setItem(`chatContents_${chatingRoom[i].id}`, JSON.stringify(chatContents.reverse()));
            } else {
                return console.log(`${chatingRoom[i].id}번id 채팅은 없습니다.`);
            } 
        })
        .catch(err => {
            console.log("채팅조회 에러\n" + err);
        })
    }
}

export default chatMsgSearchFn