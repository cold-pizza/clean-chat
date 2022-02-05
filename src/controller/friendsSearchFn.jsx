import axios from 'axios';
import userOverlapCheckFn from './userOverlapCheckFn';


 // 친구 검색 요청 함수.
 const friendsSearchFn = function(email, setSearchList, friends, state, setState) {
    axios.get(`${axios.defaults.baseURL}/api/users/email/${email}`, { withCredentials: true })
    .then(res => {
        console.log(res.data.message);
        console.log(res.data.result);
        const user = res.data.result;
        userOverlapCheckFn(friends, user, state, setState);
        setSearchList(user);

    })
    .catch(err => {
        alert('요청정보와 일치하지 않습니다.');
        console.log(err);
    })
  }

  export default friendsSearchFn