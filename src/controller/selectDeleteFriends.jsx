

  // 삭제할 친구 선택 함수.
  const selectDeleteFriends = function(id, user) {
    if (user.id === id) {
      console.log(id)
      return id;
    }
  }

export default selectDeleteFriends