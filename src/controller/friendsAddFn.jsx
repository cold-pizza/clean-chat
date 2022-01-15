import axios from 'axios';

  // 친구 추가 함수.
  // 수정해야 함.
  const friendsAddFn = function(id, user, setUser) {
    axios.post(`https://clean-chat.kumas.dev/api/friends/${id}`)
    .then(res => {
      console.log(res.data);
      setUser([...user, res.data.result]);
      console.log('친구추가!');
    })
    .catch(err => {
      console.log(err);
    })
  }


export default friendsAddFn