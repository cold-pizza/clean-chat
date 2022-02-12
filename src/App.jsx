// 컴포넌트
import React, { useEffect, useState } from 'react';
// import LoginLoading from './view/loginLoading';
// import ChatLoading from './view/loginLoading';
import Signup from './view/signup';
import Chat from './view/chat';
import Login from './view/login';
import Search from './view/search';
import Setting from './view/setting';
import SearchUser from './view/searchUser';
import FriendsRemove from './view/friendsremove';
import Delete from './view/delete';
import MyProfile from './view/myprofile';
// import ProfileImageEdit from './view/profileimageedit';
import FriendsModal from './view/friendsmodal';
import Nav from './view/nav';
import Friends from './view/friends';
import Action from './view/action';
import ChatingAlarm from './view/chatingAlarm';
import './App.scss';
import ChatingRoom from './view/chatingroom';
import ProfileImageEdit from './view/profileimageedit';

// 라이브러리
import { Route, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

// const Login = lazy(() =>  import('./view/login') );
// const Chat = lazy(() => import('./view/chat'));
// const ChatingRoom = lazy(() => import('./view/chatingroom') );
// const Friends = lazy(() => import('./view/friends'));
// const Signup = lazy(() => import('./view/signup'));
// const ProfileImageEdit = lazy(() => import('./view/profileimageedit'));

// CORS 처리
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://clean-chat.kumas.dev';

function App() {
  const alarm = useSelector(state => state.switchReducer.alarm);
  const settingSwitch = useSelector(state => state.switchReducer.settingSwitch);
  const history = useHistory();

  const [chatingRoom, setChatingRoom] = useState(null);

  const [message, setMessage] = useState(null);

  const [myAccount, setMyAccount] = useState(null);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const routeLimitFn = function() {
      const path = window.location.pathname;
      const url = ["/clean-chat/", "/clean-chat/signup"];
      if (localStorage.getItem('user') === null && path !== (url[0] || url[1])) {
          history.replace('/');
          alert('로그인시 이용 가능합니다.');
        }
    }
    return routeLimitFn();
  }, [history])

  useEffect( () => {
    if (localStorage.length !== 0 && window.location.pathname === '/clean-chat/') {
      import('./controller/logoutFn')
      .then(({ default: logout }) => {
        logout(history);
      })
    }
  }, [history]);

  return (
    <div className="App">
      <div className="app-box">
        {/* 로그인 */}
        {/* <Suspense fallback={<LoginLoading />}> */}
      <Route exact path="/" render={() => <Login history={history} 
      setMyAccount={setMyAccount}
        setUser={setUser}
        chatingRoom={chatingRoom}
        setChatingRoom={setChatingRoom} /> }/>
        <Route path="/signup">
        <Signup history={history} />
      </Route>
        {/* </Suspense> */}

      
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
      <Action history={history} setUser={setUser} />
      </Route>
        {/* <Route path="/friends" component={() => import('./view/friends') /> */}
      {/* 친구창 */}
        {/* <Suspense fallback={<LoginLoading />}> */}
       <Route path="/friends">
        <Friends 
        setMyAccount={setMyAccount} 
        myAccount={myAccount} 
        user={user} 
        setUser={setUser}
        history={history} 
        chatingRoom={chatingRoom}
        setChatingRoom={setChatingRoom}
        setMessage={setMessage}
        />
      </Route>
        {/* </Suspense> */}

      {/* Setting */}
      { settingSwitch ? <Setting history={history} /> : null }

      {/* 채팅목록 */}
      <Route path="/chat">    
      {/* <Suspense fallback={<LoginLoading />}> */}
        <Chat 
        history={history} 
        chatingRoom={chatingRoom} 
        setMyAccount={setMyAccount}
        setChatingRoom={setChatingRoom}
        user={user}
        />
        {/* </Suspense> */}
      </Route>

      {/* 채팅창 */}
        {/* <Suspense fallback={<LoginLoading />}> */}
      <Route path="/chatingroom/:id">
        <ChatingRoom 
        chatingRoom={chatingRoom} 
        setChatingRoom={setChatingRoom}
        myAccount={myAccount}
        setMyAccount={setMyAccount}
        history={history} 
        setMessage={setMessage}
        />
      </Route>
      <Route path="/myprofile/profileimageedit">
        <ProfileImageEdit 
        myAccount={myAccount}
        setMyAccount={setMyAccount}
        history={history}
        />
      </Route>
        {/* </Suspense> */}

      {/* 친구찾기 */}
      <Route path="/search">
        <Search history={history} user={user} setUser={setUser} />
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


      {/* 친구프로필 */}
      <Route path="/friends/friendsmodal/:id">
        <FriendsModal 
        history={history} 
        user={user} 
        setUser={setUser}
        chatingRoom={chatingRoom}
        setChatingRoom={setChatingRoom}
        />
      </Route>

      {/* 채팅알림창 */}
      { alarm ? <ChatingAlarm chatingRoom={chatingRoom} message={message} /> : null }
      </div>
    </div>
  );
}

export default React.memo(App);
