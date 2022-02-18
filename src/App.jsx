import React, { useEffect } from 'react';
// 컴포넌트
import Signup from './view/signup';
import Chat from './view/chat';
import Login from './view/login';
import Search from './view/search';
import Setting from './view/setting';
import SearchUser from './view/searchUser';
import FriendsRemove from './view/friendsremove';
import Delete from './view/delete';
import MyProfile from './view/myprofile';
import FriendsModal from './view/friendsmodal';
import Nav from './view/nav';
import Friends from './view/friends';
import Action from './view/action';
import ChatingAlarm from './view/chatingAlarm';
import './App.scss';
import ChatingRoom from './view/chatingroom';

// function
import chatAlarm from './controller/chatAlarmFn';
import urlLimitFn from './controller/urlLimitFn';

// 라이브러리
import { Route, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

// CORS 처리
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://clean-chat.kumas.dev';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const alarm = useSelector(state => state.switchReducer.alarm);
  const settingSwitch = useSelector(state => state.switchReducer.settingSwitch);
  const messageData = useSelector(state => state.stateReducer.message);
  const myAccount = useSelector(state => state.stateReducer.myAccount);

  useEffect(() => {
    chatAlarm(messageData, dispatch);
  }, [dispatch, messageData]);

  useEffect(() => {
    if (myAccount !== null && window.location.pathname === '/clean-chat/') {
      import('./controller/logoutFn')
      .then(({ default: logout }) => {
        logout(history);
      })
    }
    urlLimitFn(myAccount, history);
  }, [history, myAccount]);

  return (
    <div className="App">
      <div className="app-box">
      {/* navigation */}
      <Nav />
      {/* 회원가입 */}
      <Route path="/signup" render={() => <Signup history={history} />} />
        {/* 로그인 */}
      <Route exact path="/" render={() => <Login history={history} /> }/>

      {/* 액션버튼s */}
      {/* 로그인 후 컴포넌트에 삽입 */}
      <Route path={[
        '/friends', 
        '/chat',  
        '/search', 
        '/searchuser', 
        '/friendsremove'
        ]} render={() => <Action history={history} />} />

      {/* 친구창 */}
       <Route path="/friends" render={() => <Friends history={history} />} />

      {/* Setting */}
      { settingSwitch ? <Setting history={history} /> : null }

      {/* 채팅목록 */}
      <Route path="/chat" render={() => <Chat history={history} />} />    

      {/* 채팅창 */}
      <Route path="/chatingroom/:id" render={() => <ChatingRoom history={history} />} />

      {/* 친구찾기 */}
      <Route path="/search" render={() => <Search history={history} />} />

      {/* 친구추가 */}
      <Route path="/searchuser" render={() => <SearchUser />} />

      {/* 친구관리창 */}
      <Route path="/friendsremove" render={() => <FriendsRemove history={history} />} />

      {/* 친구삭제모달창 */}
        <Route path="/friendsremove/delete/:id" render={() => <Delete history={history} />} />

      {/* 내 프로필 설정 */}
      <Route path="/myprofile" render={() => <MyProfile history={history} />} />

      {/* 친구프로필 */}
      <Route path="/friends/friendsmodal/:id" render={() => <FriendsModal />} />

      {/* 채팅알림창 */}
      { alarm ? <ChatingAlarm /> : null }
      </div>
    </div>
  );
}

export default App;