import { user, setUser } from '../modal/user';

  // 친구 삭제 취소 함수.
  const deleteFriendsCancelFn = function(id) {
    if (user[id].active === true) {
      let arr = [...user];
      arr = arr[id].active = !arr[id].active;
      setUser(arr);
  }
}

export default deleteFriendsCancelFn