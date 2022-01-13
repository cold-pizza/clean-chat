import axios from 'axios';
import { setSearchList } from '../model/friendsSearchList';

 // 친구 검색 요청 함수.
 const friendsSearchFn = function(id) {
    axios.get(`https://clean-chat.kumas.dev/api/users/id/${id}`)
    .then(res => {
        console.log(res.data.result[0])
        const user = res.data.result[0];
        setSearchList(user);
    })
    .catch(err => {
        alert('요청정보와 일치하지 않습니다.')
        console.log(err);
    })
  }

  export default friendsSearchFn