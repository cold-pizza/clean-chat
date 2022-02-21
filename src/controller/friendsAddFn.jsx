import axios from 'axios';

  const friendsAddFn = function(id) {
    const body = {
      userId: id
    }
    axios.post(`/api/friends`, body)
    .then(res => {
      console.log("친구가 "+ res.data.message);
      axios.get(`/api/friends`)
      .then(res => {
        console.log(res);
        localStorage.setItem('user', JSON.stringify(res.data.result));
      })
      .catch(err => {
        console.log(err);
        console.log('조회 에러');
      });

      console.log(res.data.message);
    })
    .catch(err => {
      console.log(err);
      console.log('친구 등록 에러');
    })
  }


export default friendsAddFn