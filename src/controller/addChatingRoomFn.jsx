import { user } from '../model/user';
import { chatingRoom, setChatingRoom } from '../model/chatingRoom';

// 채팅방에 추가할 함수.
const addChatingRoomFn = function(id, history) {
    const users = user[id];
    const arr = [...chatingRoom, users];
    setChatingRoom(arr);
    if (chatingRoom !== null) {
      history.push(`/chatingroom/${id}`);
    }
  }
  
// export friendsmodal
export default addChatingRoomFn