import axios from 'axios';

  // 친구 추가 함수.
  const friendsAddFn = function(id) {
    axios.post(`https://clean-chat.kumas.dev/api/friends/${id}`)
    .then(res => {
      // setUser([...user, res.data.result]);
      console.log(res.data)
      console.log('친구추가!');
    })
    .catch(err => {
      console.log(err);
    })
  }


export default friendsAddFn