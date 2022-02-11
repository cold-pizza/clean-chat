import axios from "axios";

// 채팅방에 추가할 함수.
const addChatingRoomFn = function(id) {
  const body = {
    userId: [id].id
  }
  axios.post(`${axios.defaults.baseURL}/api/chats`, body)
  .then(res => {
    const room = res.data.result;
    console.log(res.data.message);
    const item = localStorage.getItem('chatingRoom');
    if (item !== null) {
      const cr = [...JSON.parse(item), room];
      localStorage.setItem('chatingRoom', JSON.stringify(cr));
    } else {
      localStorage.setItem('chatingRoom', JSON.stringify(room));
    }
  })
  .catch(err => {
    console.log(err);
    console.log("채팅방 생성 에러");
  });
  }
  
// export friendsmodal
export default addChatingRoomFn