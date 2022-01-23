import axios from "axios"


const chatMsgSearchFn = function(id) {
    axios.get(`https://clean-chat.kumas.dev/api/chats/${id}/messages`)
    .then(res => {
        console.log(res.data.message);
        const chatContents = res.data.result[0].ChatContents;
        console.log(chatContents);
        localStorage.setItem('chatContents', JSON.stringify(chatContents));
        
    })
    .catch(err => {
        console.log(err);
        console.log('채팅조회 에러');
    })
}

export default chatMsgSearchFn