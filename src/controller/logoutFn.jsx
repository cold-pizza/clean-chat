import axios from 'axios';

  // 로그아웃 함수.
  const logoutFn = function(history) {
    axios.post('https://clean-chat.kumas.dev/api/auth/logout', { withCredentials: true })
    .then(res => {
      // 로컬스토리지 완전 삭제라서 부분삭제로 추후 변경.
      // *** 한 브라우저에서 여러 명이 로그인 할 경우. ***
      localStorage.clear();
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