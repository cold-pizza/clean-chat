import axios from "axios"

const chatMsgSearchFn = function(chatingRoom) {
    for (let i = 0; i < chatingRoom.length; i++) {
        axios.get(`${axios.defaults.baseURL}/api/chats/${chatingRoom[i].id}/messages`)
        .then(res => {
            console.log(`${i}번째 ` + res.data.message);
            console.log(res.data.result);
            const chatContents = res.data.result[0].ChatContents;
            localStorage.setItem(`chatContents_${i}`, JSON.stringify(chatContents.reverse()));
        })
        .catch(err => {
            console.log(err);
            console.log('채팅조회 에러');
        })
    }
}

export default chatMsgSearchFn