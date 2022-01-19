import axios from 'axios';

  // 친구 추가 함수.
  // 수정해야 함.
  const friendsAddFn = function(id) {
    const body = {
      userId: id
    }
    axios.post('https://clean-chat.kumas.dev/api/friends', body)
    .then(res => {
      console.log(res.data.message);
      axios.get('https://clean-chat.kumas.dev/api/friends')
      .then(res => {
        console.log(res);
        localStorage.setItem('user', JSON.stringify(res.data.result));
      })
      .catch(err => console.log(err));

      console.log('친구추가');
    })
    .catch(err => {
      console.log(err);
    })
  }


export default friendsAddFn