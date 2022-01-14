
  // 삭제할 친구 선택 함수.
  const selectDeleteFriends = function(id, user, setUser) {
    setUser(
      user.map((user) => {
        return user.id === id ? { ...user, active: !user.active } : user;
      })
    )
  }

export default selectDeleteFriends