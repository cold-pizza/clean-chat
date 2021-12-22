import React, { useState } from 'react';
import Login from './components/login';
import Signup from './components/signup';
import Friends from './components/friends';
import Chat from './components/chat';
import Search from './components/search';
import Setting from './components/setting';
import SearchEmail from './components/searchemail';
import FriendsRemove from './components/friendsremove';
import Delete from './components/delete';
import MyProfile from './components/myprofile';
import ProfileImageEdit from './components/profileimageedit';
import ChatingRoom from './components/chatingroom';
import './App.scss';

import { Route, useHistory, useParams } from 'react-router-dom';

function App() {
  const history = useHistory();

  // 친구 계정.
  const [user, setUser] = useState([{
    id: 0,
    name: '김재우',
    email: '',
    active: false,
  }, {
    id: 1,
    name: '강유진',
    email: '',
    active: false,
  }, {
    id: 2,
    name: '강현수',
    email: '',
    active: false,
  }]);

  // 삭제할 친구 선택 함수.
  const deleteModal = function(id) {
    setUser(
      user.map((user)=>{
        return user.id === id ? { ...user, active: !user.active } : user;
      })
    )
  }

  // 삭제 모달창 params.
  const { id } = useParams();
  return (
    <div className="App">
      <div className="app-box">
        {/* 로그인 */}
      <Route exact path="/">
        <Login history={history} />
      </Route>
      {/* 회원가입 */}
      <Route path="/signup">
        <Signup history={history} />
      </Route>

      {/* navigation */}
      <Nav />
      {/* 액션버튼s */}
      <Action history={history} />
      {/* 친구창 */}
      <Route path="/friends">
        <Friends user={user} history={history} />
      </Route>
      <Route path="/friends/setting">
        <Setting history={history} />
      </Route>
      {/* 채팅목록 */}
      <Route path="/chat">
        <Chat history={history} />
      </Route>
      {/* 채팅창 */}
      <Route path="/chatingroom/:id">
        <ChatingRoom history={history} />
      </Route>

      {/* 친구찾기 */}
      <Route path="/search">
        <Search />
      </Route>
      {/* 친구추가 */}
      <Route path="/searchemail">
        <SearchEmail history={history} />
      </Route>
      {/* 친구관리창 */}
      <Route path="/friendsremove">
        <FriendsRemove history={history} user={user} deleteModal={deleteModal} />
      </Route>
      {/* 친구삭제모달창 */}
        <Route path="/friendsremove/delete/:id">
          <Delete user={user} history={history} />
        </Route>
      {/* 내 프로필 설정 */}
      <Route path="/myprofile">
        <MyProfile history={history} />
      </Route>
      {/* 내 프로필 이미지 변경 */}
      <Route path="/myprofile/profileimageedit">
        <ProfileImageEdit history={history}/>
      </Route>

      </div>
    </div>
  );
}

function Nav() {
  const [navSite, setNavSite] = useState([{
    id: 0,
    site: '/friends',
    title: '친구'
  },{
    id: 1,
    site: '/chat',
    title: '채팅'
  }, {
    id: 2,
    site: '/searchemail',
    title: '친구검색'
  }, {
    id: 3,
    site: '/search',
    title: '친구찾기'
  }, {
    id: 4,
    site: '/friendsremove',
    title: '친구관리'
  }]);
  return <div className="nav" key={navSite.id}>
    {
      navSite.map(({ site, title })=>{
        return (<>
        <Route exact path={site}>
        <div>{title}</div>
        <div>
          <i className="fas fa-cog"></i>
          </div>
        </Route>
        </>)
      })
    }
  </div>
}

function Action(props) {
  const [site, setSite] = useState([{
    id: 0,
    site: '/friends',
    logo: 'fas fa-user',
  }, {
    id: 1,
    site: '/chat',
    logo: 'fas fa-comment'
  }, {
    id: 2,
    site: '/search',
    logo: 'fas fa-search'
  }, {
    id: 3,
    site: '/friends/setting',
    logo: 'fas fa-cog'
  }]);
  return <div className="action" key={site.id}>
    {
      site.map(({ site, logo })=>{
        return (
          <i onClick={()=>{
      props.history.push(site);
    }} className={logo}></i>
        )
      })
    }
    </div>
}

export default App;
