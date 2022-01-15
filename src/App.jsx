// 컴포넌트
import React, { useEffect, useState } from 'react';
import Login from './view/login';
import Signup from './view/signup';
import Friends from './view/friends';
import Chat from './view/chat';
import Search from './view/search';
import Setting from './view/setting';
import SearchEmail from './view/searchemail';
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


// CORS 처리
axios.defaults.withCredentials = true;

function App() {
  const history = useHistory();
  // 내 프로필 자동 업데이트.
  useEffect(()=>{
    setMyAccount(JSON.parse(localStorage.getItem('myInfo')));
  }, [])
  const basicImg = 'https://cold-pizza.github.io/clean-chat/images/happy.jpg';
  const [chatingRoom, setChatingRoom] = useState([]);

  const [myAccount, setMyAccount] = useState(null);

  const [settingModalSwitch, setSettingModalSwitch] = useState(false);

  const [user, setUser] = useState([{
    id: 0,
    name: '김재우',
    img: 'https://cold-pizza.github.io/clean-chat/images/1.jpg',
    email: '',
    active: false,
  }, {
    id: 1,
    name: '강유진',
    img: 'https://cold-pizza.github.io/clean-chat/images/2.jpg', 
    email: '',
    active: false,
  }, {
    id: 2,
    name: '강현수',
    img: 'https://cold-pizza.github.io/clean-chat/images/3.jpg',
    email: '',
    active: false,
  }]);

  // 비 로그인시 URL접근 제한.
  useEffect(() => {
    const routeLimitFn = function() {
      const host = window.location.host;
      const loginUrl = `${host}/clean-chat/`;
      if (localStorage.length === 0 && window.location.href !== loginUrl) {
          alert('로그인시 이용 가능합니다.');
          history.replace('/');
          return false;
        }
    }
    routeLimitFn();
  }, [])

  return (
    <div className="App">
      <div className="app-box">
        
        {/* 로그인 */}
      <Route exact path="/">
        <Login 
        history={history} 
        setMyAccount={setMyAccount}
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
        '/searchemail', 
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
        history={history} 
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
        <Chat history={history} 
        chatingRoom={chatingRoom} 
        />
      </Route>

      {/* 채팅창 */}
      <Route path="/chatingroom/:id">
        <ChatingRoom 
        chatingRoom={chatingRoom} 
        history={history} 
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
      <Route path="/searchemail">
        <SearchEmail 
        history={history} 
        basicImg={basicImg} 
        user={user}
        setUser={setUser}
        />
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
        />
      </Route>

      </div>
    </div>
  );
}

export default App;
