import axios from 'axios';
import chatMsgSearchFn from './chatMsgSearchFn';
import imageFilterFn from './imageFilterFn';

  // 로그인 함수.
  const loginFn = async function(e, email, password, basicImg, history, dispatch, setIdInput) {
    if (!email) {
      alert('이메일을 입력해주세요.');
      return ;
    }
    if (!password) {
      alert('비밀번호를 입력해주세요.');
      return ;
    } 
    const data = {
      email, 
      password
    }
    e.preventDefault();
    try {
    // 로그인 버튼 비활성화.
      dispatch({ type: "SWITCH_BUTTON_ACTIVE" });
      // e.preventDefault();
        // 로그인 요청.
        const login = await axios.post(`/api/auth/login`, data);
        const user = login.data.result;
        dispatch({ type: "SET_MY_ACCOUNT", payload: user });
        // 친구 요청.
        const friend = await axios.get(`/api/friends`);
        const friends = imageFilterFn(friend.data.result, basicImg);
        dispatch({ type: "SET_USERS", payload: friends });
        if (login) {
            // 채팅방 요청.
            const chatingRoom = await axios.get(`/api/chats`);
            const cr = chatingRoom.data.result;
            dispatch({ type: "SET_CHATINGROOM", payload: cr }); 
            // 채팅기록 생성.
            chatMsgSearchFn(cr);
            setIdInput({ loginId: '', loginPs: '' });
            return history.push('/friends');
        }
      } catch(err) {
        console.error(err);
      }
      finally {
        // 로그인 버튼 활성화.
        dispatch({ type: "SWITCH_BUTTON_ACTIVE" });
      }
  };

export default loginFn