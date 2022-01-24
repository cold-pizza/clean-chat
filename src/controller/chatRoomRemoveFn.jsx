import axios from "axios"

const chatRoomRemoveFn = function(id) {
    axios.delete(`${axios.defaults.baseURL}/api/chats/${id}`)
    .then(res => {
        console.log(res.data.message);
        // 삭제하고 업데이트.
        axios.get(`${axios.defaults.baseURL}/api/chats`)
        .then(res => {
            localStorage.setItem('chatingRoom', JSON.stringify(res.data.result));
            console.log(res.data.message);
        })
        .catch(err => {
            console.log(err);
            console.log("호출 문제");
        })
    })
    .catch(err => {
        console.log(err);
        console.log("삭제 문제");
    });
}

export default chatRoomRemoveFn