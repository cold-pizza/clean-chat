import axios from "axios";

// 채팅방에 추가할 함수.
const addChatingRoomFn = function(users, length,  dispatch, history) {
  const id = Number(localStorage.getItem('friendsNumber'));
  const body = {
    userId: users[id].id
  }
  axios.post(`${axios.defaults.baseURL}/api/chats`, body)
  .then(res => {
    const result = res.data.result;
    console.log(res.data.message);
    dispatch({ type: "SET_CHATINIGROOM", payload: result });
    localStorage.setItem(`chatContents_${length}`);
    history.push(`/chatingroom/${length}`);
  })
  .catch(err => {
    console.log("채팅방 생성 에러");
    console.log(err);
  });
  }
  
// export friendsmodal
export default addChatingRoomFn