import axios from 'axios';

  // **************** test ********************
  // 친구 식제 함수.
  const friendsDeleteFn = function(id) {
    axios.delete(`${axios.defaults.baseURL}/api/friends/${id}`)
    .then(res => {
      console.log(res);
      console.log(res.data.message);
      axios.get(`${axios.defaults.baseURL}/api/friends`)
      .then(res => {
        console.log(res.data.message);
        localStorage.setItem('user', JSON.stringify(res.data.result));
      })
      // 메시지 확인하고 로직 돌아가면 삭제 요청한 결과 값 user state에 넣기.
    })
    .catch(err => console.log(err));
  }

export default friendsDeleteFn