import axios from 'axios';

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
    })
    .catch(err => console.log(err));
  }

export default friendsDeleteFn