import axios from 'axios';

  // **************** test ********************
  // 친구 식제 함수.
  const friendsDeleteFn = function(id) {
    axios.delete(`https://clean-chat.kumas.dev/api/friends/${id}`)
    .then(res => {
      console.log(res);
      console.log(res.data.message);
      axios.get('https://clean-chat.kumas.dev/api/friends')
      .then(res => {
        console.log(res.data.message);
        localStorage.setItem('user', JSON.stringify(res.data.result));
      })
      // 메시지 확인하고 로직 돌아가면 삭제 요청한 결과 값 user state에 넣기.
    })
    .catch(err => console.log(err));

    // if (user[id].active === true) {
    //   let arr = [...user];
    //   arr.splice(id, 1);
    //   // id값 수정.
    //   for (let i = 0; i < arr.length; i++) {
    //     arr[i].id = i;
    //   }
    //   setUser(arr);
    // } else {
    //   console.log('취소')
    //   return false;
    // }
  }

export default friendsDeleteFn