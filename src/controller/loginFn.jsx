import axios from 'axios';

  // 로그인 함수.
  const loginFn = function(loginId, loginPs, setIdInput, setMyAccount, setUser, history) {
    if (loginId === '') {
      alert('이메일을 입력해주세요.')
      return false;
    } else {
      if (loginPs === '') {
        alert('비밀번호를 입력해주세요.')
        return false;
      }
    }
    if (localStorage.length !== 0) {
      if (JSON.parse(localStorage.myInfo).email === loginId) {
        alert('이미 로그인된 아이디 입니다.')
        return false;
      }
    } else {
      const data = {
        email: loginId, 
        password: loginPs
      }
      axios.post('https://clean-chat.kumas.dev/api/auth/login', data)
      .then(async res => {
        const user = res.data.result;
        if (res.status === 200) {
          await axios.get('https://clean-chat.kumas.dev/api/friends')
          .then(res => {
            console.log(res.data.message);
            console.log(res.data.result);
            localStorage.setItem('user', JSON.stringify(res.data.result));
            setUser(JSON.parse(localStorage.getItem('user')));
          })
          .catch(err => console.log(err));
          
          const item = { ...user };
          item.imagePath = 'https://cold-pizza.github.io/clean-chat/images/happy.jpg';
          setMyAccount(item);
          localStorage.setItem('myInfo', JSON.stringify(item));
          setIdInput({ loginId: '', loginPs: '' });
          setMyAccount(JSON.parse(localStorage.getItem('myInfo')));
          console.log(res.data.message);
          history.push('/friends');
        }
      })
      .catch(err => {
        console.log(err);
        alert('이메일 또는 비밀번호를 다시 입력해주세요.');
      }) 
    }
  }

export default loginFn