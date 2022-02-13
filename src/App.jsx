import React, { useEffect, useState, lazy, Suspense } from 'react';
// 컴포넌트
import Signup from './view/signup';
import Chat from './view/chat';
// import Login from './view/login';
import LoginLoading from './view/loginLoading';
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
import ProfileImageEdit from './view/profileimageedit';

// function
import chatAlarm from './controller/chatAlarmFn';
import urlLimitFn from './controller/urlLimitFn';

// 라이브러리
import { Route, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Login = lazy(() => import("./view/login"));

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
  const history = useHistory();
  const dispatch = useDispatch();
  const alarm = useSelector(state => state.switchReducer.alarm);
  const settingSwitch = useSelector(state => state.switchReducer.settingSwitch);
  const messageData = useSelector(state => state.stateReducer.message);
  const profileImageEditSwitch = useSelector(state => state.switchReducer.profileImageEditSwitch);

  const [chatingRoom, setChatingRoom] = useState(null);
  const [myAccount, setMyAccount] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    chatAlarm(messageData, dispatch);
  }, [dispatch, messageData]);

  useEffect(() => {
    if (localStorage.length !== 0 && window.location.pathname === '/clean-chat/') {
      import('./controller/logoutFn')
      .then(({ default: logout }) => {
        logout(history);
      })
    }
    urlLimitFn(history);
  }, [history]);

  return (
    <div className="App">
      <div className="app-box">
        {/* 로그인 */}
        <Suspense fallback={<LoginLoading />}>
      <Route exact path="/" render={() => <Login history={history} 
      setMyAccount={setMyAccount}
        setUser={setUser}
        chatingRoom={chatingRoom}
        setChatingRoom={setChatingRoom} /> }/>
        </Suspense>

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
      <Action history={history} setUser={setUser} setChatingRoom={setChatingRoom} />
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
        // message={message}
        // setMessage={setMessage}
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
        // setMessage={setMessage}
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
      { alarm ? <ChatingAlarm chatingRoom={chatingRoom} /> : null }
      </div>
    </div>
  );
}

export default App;
