import axios from 'axios';


 // 친구 검색 요청 함수.
 const friendsSearchFn = function(id, setSearchList) {
    axios.get(`${axios.defaults.baseURL}/api/users/id/${id}`, { withCredentials: true })
    .then(res => {
        console.log(res.data.message);
        console.log(res.data.result);
        const user = res.data.result;
        setSearchList(user);
    })
    .catch(err => {
        alert('요청정보와 일치하지 않습니다.');
        console.log(err);
    })
  }

  export default friendsSearchFn