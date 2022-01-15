

  // 친구 삭제 취소 함수.
  const deleteFriendsCancelFn = function(id, user, setUser) {
    if (user[id].active === true) {
      let arr = [...user];
      arr = arr[id].active = !arr[id].active;
      setUser(arr);
  }
} 

export default deleteFriendsCancelFn