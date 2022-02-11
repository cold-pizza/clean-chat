import axios from 'axios';
import chatMsgSearchFn from './chatMsgSearchFn';
import socketCallFn from './socketCallFn';
import changeStateFn from './changeStateFn';
import io from 'socket.io-client';


  // 로그인 함수.
  const loginFn = function(
    loginId, 
    loginPs, 
    setIdInput, 
    setMyAccount, 
    setUser, 
    setChatingRoom, 
    basicImg,
    btnValue,
    setBtnValue,
    history
    ) {
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
      // 로그인 버튼 비활성화.
      changeStateFn(btnValue, setBtnValue);

      // 로그인 요청.
      axios.post(`${axios.defaults.baseURL}/api/auth/login`, data)
      .then(res => {
        const user = res.data.result;
        if (!res.data.result.imagePath) {
          user.imagePath = basicImg;
        } else {
          user.imagePath = `${axios.defaults.baseURL + res.data.result.imagePath}`;
        }
        console.log(user);
        if (res.status === 200) {
          // dispatch({ type: "CALL_USERS" });
          // 친구리스트 요청.
          axios.get(`${axios.defaults.baseURL}/api/friends`)
          .then(res => {
            console.log("친구가 " + res.data.message);
            console.log(res.data.result);
            localStorage.setItem('user', JSON.stringify(res.data.result));
            setUser(JSON.parse(localStorage.getItem('user')));
          })
          .catch(err => {
            console.log('친구 에러');
            console.log(err);
          });

          // 채팅방 요청.
          axios.get(`${axios.defaults.baseURL}/api/chats`)
          .then(res => {
            console.log('채팅방이 ' + res.data.message);
            const cr = res.data.result;
            localStorage.setItem('chatingRoom', JSON.stringify(cr));
            setChatingRoom(cr);
            chatMsgSearchFn(cr);
          })
          .catch(err => {
            console.log('채팅방 에러');
            console.log(err);
          })
          // 내 계정 업로드.
          setMyAccount(user);
          localStorage.setItem('myInfo', JSON.stringify(user));
          setIdInput({ loginId: '', loginPs: '' });
          console.log(res.data.message);
          history.push('/friends');
          // 로그인버튼 다시 활성화.
          changeStateFn(btnValue, setBtnValue);
        }
        const socketio = io('wss://clean-chat.kumas.dev');
        socketio.on('conn', () => {
          socketCallFn(socketio.id);
        });
      })
      .catch(err => {
        console.log(err);
        changeStateFn(btnValue, setBtnValue);
        // 401 예외 처리.
        alert('이메일 또는 비밀번호를 다시 확인해주세요.');
      }) 
    }
  };

export default loginFn