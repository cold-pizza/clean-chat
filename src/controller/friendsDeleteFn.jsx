import axios from 'axios';
import imageFilterFn from './imageFilterFn';

  const friendsDeleteFn = function(id , dispatch, basicImg) {
    axios.delete(`${axios.defaults.baseURL}/api/friends/${id}`)
    .then(res => {
      console.log(res);
      console.log(res.data.message);
      axios.get(`${axios.defaults.baseURL}/api/friends`)
      .then(res => {
        console.log(res.data.message);
        const friends = imageFilterFn(res.data.result, basicImg);
        dispatch({ type: "SET_USERS", payload: friends });
      })
    })
    .catch(err => console.log(err));
  } 

export default friendsDeleteFn