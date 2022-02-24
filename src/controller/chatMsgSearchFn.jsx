import axios from "axios"
const chatMsgSearchFn = function(chatingRoom) {
    chatingRoom.map(async list => {
        const cr = await axios.get(`/api/chats/${list.id}/messages`);
        const chatContents = cr.data.result[0].ChatContents;
        localStorage.setItem(`chatContents_${list.id}`, JSON.stringify(chatContents.reverse()));
        console.log(`${list.id}번 ${list.chatUsers[0].name}방이 생성되었습니다.`);
    });
}

export default chatMsgSearchFn