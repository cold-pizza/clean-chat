import axios from "axios"


const msgRemoveFn = function(chatId, msgId, msg) {
    const data = {
        message: msg
    }
    axios.post(`${axios.defaults.baseURL}/api/chats/${chatId}/messages/${msgId}`, data)
    .then(res => {
        console.log(res.data.message);
    })
    .catch(err => {
        console.log(err);
        console.log('메시지 삭제 요청 에러');
    })
}

export default msgRemoveFn