import axios from "axios"


const msgSearchFn = function(id, dispatch) {
    axios.get(`/api/chats/${id}/messages`)
    .then(res => {
        console.log('메시지가 ' + res.data.message);
        console.log(res);
        const chatContents = res.data.result[0].ChatContents;
        localStorage.setItem(`chatContents_${id}`, JSON.stringify(chatContents.reverse()));

        axios.get(`/api/chats`)
        .then(res => {
          console.log('채팅방이 ' + res.data.message);
          const cr = res.data.result;
          dispatch({ type: "SET_CHATINGROOM", payload: cr });
        })
        .catch(err => {
          console.log('채팅방 에러');
          console.log(err);
        })
    })
    .catch(err => {
        console.log('메시지 조회 에러\n' + err);
    })
}

export default msgSearchFn