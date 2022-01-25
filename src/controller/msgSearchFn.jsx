import axios from "axios"


const msgSearchFn = function(i, chatingRoom, setChatingRoom) {
    axios.get(`${axios.defaults.baseURL}/api/chats/${chatingRoom[i].id}/messages`)
    .then(res => {
        console.log(res.data.message);
        const chatContents = res.data.result[0].ChatContents;
        localStorage.setItem(`chatContents_${i}`, JSON.stringify(chatContents.reverse()));

        axios.get(`${axios.defaults.baseURL}/api/chats`)
        .then(res => {
          console.log('채팅방이 ' + res.data.message);
          const cr = res.data.result;
          localStorage.setItem('chatingRoom', JSON.stringify(cr));
          setChatingRoom(cr);
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