import axios from "axios"

const chatRoomRemoveFn = function(id) {
    axios.delete(`https://clean-chat.kumas.dev/api/chats/${id}`)
    .then(res => {
        console.log(res.data.message);
        // 삭제하고 업데이트.
        axios.get('https://clean-chat.kumas.dev/api/chats')
        .then(res => {
            console.log(res.data.message);
            localStorage.setItem('chatingRoom', res.data.result);
        })
    })
    .catch(console.log);
}

export default chatRoomRemoveFn