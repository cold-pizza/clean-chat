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
import ChatingAlarm from './view/chatingAlarm';
import './App.scss';

// 라이브러리
import { Route, useHistory } from 'react-router-dom';
import axios from 'axios';

// 강제 로그아웃 하기
// import⬇️, line59~60사이 logoutFn() 열기.
// import logoutFn from './controller/logoutFn';

// CORS 처리
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://clean-chat.kumas.dev';

function App() {
  const history = useHistory();

  const basicImg = 'https://cold-pizza.github.io/clean-chat/images/happy.jpg';

  const [chatAlarmSwitch, setChatAlarmSwitch] = useState(false);

  const [chatingRoom, setChatingRoom] = useState(null);

      // 나의 채팅 내용.
  const [myChatComments, setMyChatComments] = useState(null);

  const [myAccount, setMyAccount] = useState(null);

  const [settingModalSwitch, setSettingModalSwitch] = useState(false);

  const [chatBubbleSwitch, setChatBubbleSwitch] = useState(false);

  const [user, setUser] = useState(null);
  // 비 로그인시 URL접근 제한.
  useEffect(() => {
    const routeLimitFn = function() {
      const host = window.location.host;
      const loginUrl = `http://${host}/clean-chat/`;
      if (localStorage.getItem('user') === null && window.location.href !== loginUrl) {
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
      <Action history={history} chatBubbleSwitch={chatBubbleSwitch} />
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
        chatingRoom={chatingRoom}
        setChatingRoom={setChatingRoom}
        chatAlarmSwitch={chatAlarmSwitch}
        setChatAlarmSwitch={setChatAlarmSwitch}
        chatBubbleSwitch={chatBubbleSwitch}
        setChatBubbleSwitch={setChatBubbleSwitch}
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
        setMyAccount={setMyAccount}
        setChatingRoom={setChatingRoom}
        basicImg={basicImg}
        user={user}
        setMyChatComments={setMyChatComments}
        />
      </Route>

      {/* 채팅창 */}
      <Route path="/chatingroom/:id">
        <ChatingRoom 
        chatingRoom={chatingRoom} 
        setChatingRoom={setChatingRoom}
        myAccount={myAccount}
        setMyAccount={setMyAccount}
        history={history} 
        basicImg={basicImg}
        myChatComments={myChatComments}
        setMyChatComments={setMyChatComments}
        />
      </Route>

      {/* 친구찾기 */}
      <Route path="/search">
        <Search 
        history={history}
        user={user}  
        basicImg={basicImg}
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

      {/* 친구프로필 */}
      <Route path="/friends/friendsmodal/:id">
        <FriendsModal 
        history={history} 
        user={user} 
        basicImg={basicImg}
        chatingRoom={chatingRoom}
        setChatingRoom={setChatingRoom}
        />
      </Route>

      {/* 채팅알림창 */}
      {
        chatAlarmSwitch ? 
        <ChatingAlarm basicImg ={basicImg} />
        : null
      }
      </div>
    </div>
  );
}

export default App;
