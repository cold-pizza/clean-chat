import axios from 'axios';

  // 로그아웃 함수.
  const logoutFn = function(history) {
    axios.post(`/api/auth/logout`, { withCredentials: true })
    .then(res => {
      localStorage.clear("persist:root");
        console.log(res.data.message);
        history.replace('/');
    })
    .catch(err => {
      console.log(err);
      console.log('에러 대체 로그아웃.');
      history.replace('/');
    })
  }

export default logoutFn