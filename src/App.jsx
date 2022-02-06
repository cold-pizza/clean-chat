// 컴포넌트
import React, { useEffect, useState, lazy, Suspense } from 'react';
import LoginLoading from './view/loginLoading';
import ChatLoading from './view/loginLoading';
import Signup from './view/signup';
import Chat from './view/chat';
import Search from './view/search';
import Setting from './view/setting';
import SearchUser from './view/searchUser';
import FriendsRemove from './view/friendsremove';
import Delete from './view/delete';
import MyProfile from './view/myprofile';
import ProfileImageEdit from './view/profileimageedit';

import FriendsModal from './view/friendsmodal';
import Nav from './view/nav';
import Action from './view/action';
import ChatingAlarm from './view/chatingAlarm';
import './App.scss';

// 라이브러리
import { Route, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

// 강제 로그아웃 하기
// import⬇️, line59~60사이 logoutFn() 열기.
// import logoutFn from './controller/logoutFn';
const Login = lazy(() =>  import('./view/login') );
const ChatingRoom = lazy(() => import('./view/chatingroom') );
const Friends = lazy(() => import('./view/friends'));

// CORS 처리
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://clean-chat.kumas.dev';

function App() {
  const alarm = useSelector(state => state.alarm);
  const settingSwitch = useSelector(state => state.settingSwitch);
  const history = useHistory();

  const [chatingRoom, setChatingRoom] = useState(null);

      // 나의 채팅 내용.
  const [myChatComments, setMyChatComments] = useState(null);

  const [myAccount, setMyAccount] = useState(null);

  const [user, setUser] = useState(null);
  // 비 로그인시 URL접근 제한.
  useEffect(() => {
    const routeLimitFn = function() {
      const path = window.location.pathname;
      const url = ["/clean-chat/", "/clean-chat/signup"];
      if (localStorage.getItem('user') === null && path !== (url[0] || url[1])) {
          history.replace('/');
              // 강제 로그아웃 해야할 때⬇️
              // logoutFn(history);
          alert('로그인시 이용 가능합니다.');
        }
    }
    return routeLimitFn();
  }, [])


  // 로그인 중 다시 로그인 화면 돌아가기 방지.
  useEffect(() => {
    if (localStorage.length !== 0 && window.location.pathname === '/clean-chat/') {
      history.goBack();
      return alert('로그인을 원하시면 로그아웃하시기 바랍니다.');
    }
  }, []);

  return (
    <div className="App">
      <div className="app-box">
        {/* 로그인 */}
      <Route exact path="/">
        <Suspense fallback={<LoginLoading />}>
        <Login 
        history={history} 
        setMyAccount={setMyAccount}
        setUser={setUser}
        chatingRoom={chatingRoom}
        setChatingRoom={setChatingRoom}
        />
        </Suspense>
      </Route>

      {/* 회원가입 */}
      <Route path="/signup">
        <Signup history={history} />
      </Route>
      
      {/* navigation */}
      <Nav />

      {/* 액션버튼s */}
      <Route path={[
        '/friends', 
        '/chat',  
        '/search', 
        '/searchuser', 
        '/friendsremove'
        ]}>
      <Action history={history} />
      </Route>

      {/* 친구창 */}
      <Route path="/friends">
        <Suspense fallback={<LoginLoading />}>
        <Friends 
        setMyAccount={setMyAccount} 
        myAccount={myAccount} 
        user={user} 
        setUser={setUser}
        history={history} 
        chatingRoom={chatingRoom}
        setChatingRoom={setChatingRoom}
        />
        </Suspense>
      </Route>

      {/* Setting */}
      { settingSwitch ? <Setting history={history} /> : null }

      {/* 채팅목록 */}
      <Route path="/chat">
        <Chat 
        history={history} 
        chatingRoom={chatingRoom} 
        setMyAccount={setMyAccount}
        setChatingRoom={setChatingRoom}
        user={user}
        setMyChatComments={setMyChatComments}
        />
      </Route>

      {/* 채팅창 */}
      <Route path="/chatingroom/:id">
        <Suspense fallback={<ChatLoading />}>
        <ChatingRoom 
        chatingRoom={chatingRoom} 
        setChatingRoom={setChatingRoom}
        myAccount={myAccount}
        setMyAccount={setMyAccount}
        history={history} 
        myChatComments={myChatComments}
        setMyChatComments={setMyChatComments}
        />
        </Suspense>
      </Route>

      {/* 친구찾기 */}
      <Route path="/search">
        <Search history={history} user={user} />
      </Route>

      {/* 친구추가 */}
      <Route path="/searchuser">
        <SearchUser user={user} history={history} />
      </Route>

      {/* 친구관리창 */}
      <Route path="/friendsremove">
        <FriendsRemove 
        history={history} 
        user={user}
        setUser={setUser}
        />
      </Route>

      {/* 친구삭제모달창 */}
        <Route path="/friendsremove/delete/:id">
          <Delete 
          user={user}
          setUser={setUser}
          history={history} 
          />
        </Route>

      {/* 내 프로필 설정 */}
      <Route path="/myprofile">
        <MyProfile 
        history={history} 
        myAccount={myAccount}
        setMyAccount={setMyAccount}
        />
      </Route>

      {/* 내 프로필 이미지 변경 */}
      <Route path="/myprofile/profileimageedit">
        <ProfileImageEdit 
        myAccount={myAccount}
        setMyAccount={setMyAccount}
        history={history}
        />
      </Route>

      {/* 친구프로필 */}
      <Route path="/friends/friendsmodal/:id">
        <FriendsModal 
        history={history} 
        user={user} 
        chatingRoom={chatingRoom}
        setChatingRoom={setChatingRoom}
        />
      </Route>

      {/* 채팅알림창 */}
      { alarm ? <ChatingAlarm /> : null }
      </div>
    </div>
  );
}

export default App;
