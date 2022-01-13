// 컴포넌트
import React, { useEffect } from 'react';
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

import { setMyAccount } from './model/myAccount';
import { settingModalSwitch } from './model/settingModalSwitch';

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



  return (
    <div className="App">
      <div className="app-box">
        
        {/* 로그인 */}
      <Route exact path="/">
        <Login 
        history={history} 
        // idInput={idInput}
        // loginId={loginId}
        // loginPs={loginPs}
        />
      </Route>

      {/* 회원가입 */}
      <Route path="/signup">
        <Signup 
        // setGender={setGender}
        // gender={gender}
        // selectGender={selectGender} 
        // setSelectGender={setSelectGender}
        // joinOnChange={joinOnChange} 
        // joinPsOnChange={joinPsOnChange}
        />
      </Route>
      
      {/* navigation */}
      <Nav 
      history={history} 
      // settingSwitch={settingSwitch}
      />

      {/* 액션버튼s */}
      <Route path={['/friends', '/chat', '/chatingroom/:id', '/search', '/searchemail', '/friendsremove']}>
      <Action history={history} />
      </Route>
      {/* 친구창 */}
      <Route path="/friends">
        <Friends 
        // setMyAccount={setMyAccount} 
        // myAccount={myAccount} 
        // basicImg={basicImg} 
        // user={user} 
        history={history} 
        />
      </Route>

      {/* Setting */}
      {
        settingModalSwitch ?
        <Setting 
        history={history} 
        // settingSwitch={settingSwitch} 
        />
        : null
      }


      {/* 채팅목록 */}
      <Route path="/chat">
        <Chat history={history} 
        // chatingRoom={chatingRoom} 
        />
      </Route>

      {/* 채팅창 */}
      <Route path="/chatingroom/:id">
        <ChatingRoom 
        // chatingRoom={chatingRoom} 
        history={history} 
        />
      </Route>

      {/* 친구찾기 */}
      <Route path="/search">
        <Search 
        history={history}
        // user={user}  
        // search={search} 
        // searchOnChange={searchOnChange} 
        />
      </Route>

      {/* 친구추가 */}
      <Route path="/searchemail">
        <SearchEmail 
        history={history} 
        // basicImg={basicImg} 
        />
      </Route>

      {/* 친구관리창 */}
      <Route path="/friendsremove">
        <FriendsRemove 
        history={history} 
        // user={user} 
        // deleteModal={deleteModal} 
        />
      </Route>

      {/* 친구삭제모달창 */}
        <Route path="/friendsremove/delete/:id">
          <Delete 
          // user={user} 
          history={history} 
          // deleteCancel={deleteCancel} 
          // deleteModal={deleteModal} 
          />
        </Route>

      {/* 내 프로필 설정 */}
      <Route path="/myprofile">
        <MyProfile 
        // basicImg={basicImg}
        // nameChange={nameChange} 
        history={history} 
        // onChange={onChange} 
        // myAccount={myAccount}
        // setMyAccount={setMyAccount}
        />
      </Route>

      {/* 내 프로필 이미지 변경 */}
      <Route path="/myprofile/profileimageedit">
        <ProfileImageEdit 
        // myAccount={myAccount}
        // setMyAccount={setMyAccount}
        history={history}
        />
      </Route>

      <Route path="/friends/friendsmodal/:id">
        <FriendsModal 
        history={history} 
        // user={user} 
        />
      </Route>

      </div>
    </div>
  );
}

export default App;
