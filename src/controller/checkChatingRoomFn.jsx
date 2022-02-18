const checkChatingRoomFn = function(chatingRoom, users, history) {
  let num = 0;
    const id = Number(localStorage.getItem('friendsNumber'));
    for (let i = 0; i < chatingRoom.length; i++) {
      if (chatingRoom[i].chatUsers[0].id === users[id].id) {
        history.push(`/chatingroom/${i}`);
        break;
      } else return num += 1;
    }
    return num;
  };

  export default checkChatingRoomFn