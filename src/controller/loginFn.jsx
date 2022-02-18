import axios from 'axios';
import chatMsgSearchFn from './chatMsgSearchFn';
// import socketCallFn from './socketCallFn';
import imageFilterFn from './imageFilterFn';
// import io from 'socket.io-client';


  // 로그인 함수.
  const loginFn = function(loginId, loginPs, basicImg, myAccount, history, dispatch, setIdInput) {
    if (loginId === '') {
      alert('이메일을 입력해주세요.')
      return false;
    } else {
      if (loginPs === '') {
        alert('비밀번호를 입력해주세요.')
        return false;
      }
    }
      if (localStorage.length > 1) {
        if (myAccount.email === loginId) {
          alert('이미 로그인된 아이디 입니다.');
          return history.replace('/');
        }
      } else {
      const data = {
        email: loginId, 
        password: loginPs
      }
      // 로그인 버튼 비활성화.
      dispatch({ type: "SWITCH_BUTTON_ACTIVE" });

      // 로그인 요청.
      axios.post(`${axios.defaults.baseURL}/api/auth/login`, data)
      .then(res => {
        const user = res.data.result;
        dispatch({ type: "SET_MY_ACCOUNT", payload: user });
        console.log(res.data.message);
        // console.log(user);
        if (res.status === 200) {
          // 친구요청.
          axios.get(`${axios.defaults.baseURL}/api/friends`)
          .then(res => {
            console.log("친구가 " + res.data.message);
            // console.log(res.data.result);
            const friends = imageFilterFn(res.data.result, basicImg);
            // localStorage.setItem('users', JSON.stringify(friends));
            dispatch({ type: "SET_USERS", payload: friends });
          })
          .catch(err => {
            console.log('친구 에러');
            console.log(err);
            history.replace('/');
          });

          // 채팅방 요청.
          axios.get(`${axios.defaults.baseURL}/api/chats`)
          .then(res => {
            console.log('채팅방이 ' + res.data.message);
            const cr = res.data.result;
            console.log(cr)
            dispatch({ type: "SET_CHATINGROOM", payload: cr });
            // localStorage.setItem('chatingRoom', JSON.stringify(cr));
            chatMsgSearchFn(cr);
          })
          .catch(err => {
            console.log('채팅방 에러');
            console.log(err);
            history.replace('/');
          })
          // 내 계정 업로드.
          // localStorage.setItem('myInfo', JSON.stringify(user));
          history.push('/friends');
          setIdInput({ loginId: '', loginPs: '' });
          // 로그인버튼 활성화.
          dispatch({ type: "SWITCH_BUTTON_ACTIVE" });
        }
        // const socketio = io('wss://clean-chat.kumas.dev');
        // socketio.on('conn', () => {
        //   socketCallFn(socketio.id);
        // });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: "SWITCH_BUTTON_ACTIVE" });
        // 401 예외 처리.
        alert('이메일 또는 비밀번호를 다시 확인해주세요.');
      }) 
    }
  };

export default loginFn