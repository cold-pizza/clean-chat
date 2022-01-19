import axios from "axios";

// 채팅방에 추가할 함수.
const addChatingRoomFn = function(id, user, history) {
  const body = {
    userId: user[id].id
  }
  axios.post('https://clean-chat.kumas.dev/api/chats', body)
  .then(res => {
    const room = res.data.result;
    console.log(res.data.message);
    const item = localStorage.getItem('chatingRoom');
    if (JSON.parse(item) !== null) {
      const cr = [...item, room];
      localStorage.setItem('chatingRoom', JSON.stringify(cr));
    } else {
      localStorage.setItem('chatingRoom', JSON.stringify(room));
    }
    history.push(`/chatingroom/${id}`);
  })
  .catch(err => console.log(err));
  }
  
// export friendsmodal
export default addChatingRoomFn