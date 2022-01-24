// 컴포넌트
import React, { useEffect, useState } from 'react';
import Login from './view/login';
import Signup from './view/signup';
import Friends from './view/friends';
import Chat from './view/chat';
import Search from './view/search';
import Setting from './view/setting';
import SearchUser from './view/searchUser';
import FriendsRemove from './view/friendsremove';
import Delete from './view/delete';
import MyProfile from './view/myprofile';
import ProfileImageEdit from './view/profileimageedit';
import ChatingRoom from './view/chatingroom';
import FriendsModal from './view/friendsmodal';
import Nav from './view/nav';
import Action from './view/action';
import './App.scss';

// 라이브러리
import { Route, useHistory } from 'react-router-dom';
import axios from 'axios';

// 에러 대비 로그아웃 import.
// import logoutFn from './controller/logoutFn';
import msgRemoveFn from './controller/msgRemoveFn';

// CORS 처리
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://clean-chat.kumas.dev';

function App() {
  const history = useHistory();
  // 내 프로필 자동 업데이트.
  useEffect(()=>{
    setMyAccount(JSON.parse(localStorage.getItem('myInfo')));
    setUser(JSON.parse(localStorage.getItem('user')));
    // logoutFn(history);
    // msgRemoveFn(7, 15, null);
  }, []);

  const basicImg = 'https://cold-pizza.github.io/clean-chat/images/happy.jpg';
  
  const [chatingRoom, setChatingRoom] = useState(null);

      // 나의 채팅 내용.
  const [chatComments, setChatComments] = useState(null);

  const [myAccount, setMyAccount] = useState(null);

  const [settingModalSwitch, setSettingModalSwitch] = useState(false);

  const [user, setUser] = useState(null);
  // 비 로그인시 URL접근 제한.
  useEffect(() => {
    const routeLimitFn = function() {
      const host = window.location.host;
      const loginUrl = `${host}/clean-chat/`;
      if (!localStorage.getItem('user') && window.location.href !== loginUrl) {
          alert('로그인시 이용 가능합니다.');
          history.replace('/');
          return false;
        }
    }
    routeLimitFn();
  }, [])

  // 로그인 중 다시 로그인 화면 돌아가기 방지.
  useEffect(() => {
    if (localStorage.length !== 0 && window.location.pathname === '/clean-chat/') {
      alert('로그인을 원하시면 로그아웃하시기 바랍니다.');
      history.goBack();
      return false;
    }
  }, []);



  return (
    <div className="App">
      <div className="app-box">
        {/* 로그인 */}
      <Route exact path="/">
        <Login 
        history={history} 
        setMyAccount={setMyAccount}
        setUser={setUser}
        basicImg={basicImg}
        chatingRoom={chatingRoom}
        setChatingRoom={setChatingRoom}
        />
      </Route>

      {/* 회원가입 */}
      <Route path="/signup">
        <Signup 
          history={history}
        />
      </Route>
      
      {/* navigation */}
      <Nav 
      history={history} 
      settingModalSwitch={settingModalSwitch}
      setSettingModalSwitch={setSettingModalSwitch}
      />

      {/* 액션버튼s */}
      <Route path={[
        '/friends', 
        '/chat', 
        '/chatingroom/:id', 
        '/search', 
        '/searchuser', 
        '/friendsremove'
        ]}>
      <Action history={history} />
      </Route>

      {/* 친구창 */}
      <Route path="/friends">
        <Friends 
        setMyAccount={setMyAccount} 
        myAccount={myAccount} 
        basicImg={basicImg} 
        user={user} 
        setUser={setUser}
        history={history} 
        setChatingRoom={setChatingRoom}
        />
      </Route>

      {/* Setting */}
      {
        settingModalSwitch ?
        <Setting 
        history={history} 
        settingModalSwitch={settingModalSwitch} 
        setSettingModalSwitch={setSettingModalSwitch}
        />
        : null
      }


      {/* 채팅목록 */}
      <Route path="/chat">
        <Chat 
        history={history} 
        chatingRoom={chatingRoom} 
        setChatingRoom={setChatingRoom}
        basicImg={basicImg}
        user={user}
        setChatComments={setChatComments}
        />
      </Route>

      {/* 채팅창 */}
      <Route path="/chatingroom/:id">
        <ChatingRoom 
        chatingRoom={chatingRoom} 
        setChatingRoom={setChatingRoom}
        history={history} 
        basicImg={basicImg}
        chatComments={chatComments}
        setChatComments={setChatComments}
        />
      </Route>

      {/* 친구찾기 */}
      <Route path="/search">
        <Search 
        history={history}
        user={user}  
        />
      </Route>

      {/* 친구추가 */}
      <Route path="/searchuser">
        <SearchUser
        history={history} 
        basicImg={basicImg}
        />
      </Route>

      {/* 친구관리창 */}
      <Route path="/friendsremove">
        <FriendsRemove 
        history={history} 
        user={user}
        setUser={setUser}
        basicImg={basicImg}
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
        settingModalSwitch={settingModalSwitch}
        setSettingModalSwitch={setSettingModalSwitch}
        />
      </Route>

      {/* 내 프로필 이미지 변경 */}
      <Route path="/myprofile/profileimageedit">
        <ProfileImageEdit 
        myAccount={myAccount}
        setMyAccount={setMyAccount}
        history={history}
        basicImg={basicImg}
        />
      </Route>

      <Route path="/friends/friendsmodal/:id">
        <FriendsModal 
        history={history} 
        user={user} 
        basicImg={basicImg}
        />
      </Route>

      </div>
    </div>
  );
}

export default App;
