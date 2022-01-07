import React, { useEffect, useState } from 'react';
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
import FriendsModal from './components/friendsmodal';
import './App.scss';

import { Route, useHistory } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

function App() {
  const history = useHistory();



  // 아이디 입력 state.
  const [idInput, setIdInput] = useState({ loginId: "", loginPs: "" });
  const { loginId, loginPs } = idInput;

  // 로그인한 계정.
  const [myAccount, setMyAccount] = useState(null);
    // 기본 이미지🌠
    const [myImage, setMyImage] = useState({ basicImg: 'https://cold-pizza.github.io/clean-chat/images/happy.jpg' });
    const { basicImg } = myImage;

    // 기본 이미지 설정 함수.
    const basicImgChange = function() {
      if (myAccount.imagePath !== basicImg) {
        const arr = { ...myAccount };
        arr.imagePath = basicImg;
        setMyAccount(arr);
      }
    }

    // 로그인 input.value
  const accountOnChange = function(e) {
    setIdInput({ ...idInput, [e.target.name]: e.target.value });
  }

  // 로그인 함수.
  const loginFn = function() {
    if (loginId === '') {
      alert('이메일을 입력해주세요.')
      return false;
    } else {
      if (loginPs === '') {
        alert('비밀번호를 입력해주세요.')
        return false;
      }
    }
    const data = {
      email: loginId, 
      password: loginPs
    }
    axios.post('https://clean-chat.kumas.dev/api/users/login', data)
     .then(res => {
       console.log(res)
       const user = res.data.result;
       localStorage.setItem('myInfo', JSON.stringify(user));
         if (res.status === 200) {
            setMyAccount(JSON.parse(localStorage.getItem('myInfo')));
            setMyAccount({ ...myAccount, imagePath: basicImg });
            console.log(res.data.message);
            setIdInput({ loginId: '', loginPs: '' });
            history.push('/friends');
          }
      })
      .catch(err => {
        console.log(err);
        alert('이메일 또는 비밀번호를 다시 입력해주세요.');
      }) 
  }

  // 내 프로필 자동 업데이트.
  // useEffect(()=>{
  //   setMyAccount(JSON.parse(localStorage.getItem('myInfo')));
  // }, [myAccount])


  // 로그아웃 함수.
  const logoutFn = function() {
    axios.get('https://clean-chat.kumas.dev/api/users/logout')
    .then(res => {
        console.log(res.data.message);
        history.replace('/');
    })
    .catch(err => {
      console.log(err);
      console.log('에러 대체 로그아웃.');
      history.replace('/');
    })
  }

// 성별 button state.
const [selectGender, setSelectGender] = useState(false);

 // 회원가입 state & onChange.
 const [joinAccount, setJoinAccount] = useState({ name: '', id: '', password: '', psCheck: '' });
 const { name, id, password } = joinAccount;
 const [gender, setGender] = useState('');
 const joinOnChange = function(e) {
   setJoinAccount({ ...joinAccount, [e.target.name]: e.target.value })
 }
 const joinPsOnChange = function(e) {
  setJoinAccount({ ...joinAccount, [e.target.name]: e.target.value })
}

  // 성별 결졍 함수.
  const genderSelectFn = function(selectGender) {
    if (selectGender) {
      let male = 'male';
    setGender(male);
    } else {
      let female = 'female';
      setGender(female);
    }
  }

  // 회원가입 함수.
  const signupFn = function() {
    if (name === '' || id === '' || password === '') {
      alert('이름, 이메일 또는 비밀번호를 입력해주세요.')
      return false;
    }
    const spe = password.search(/[!@#$%^&*]/gi);
    const num = password.search(/[0-9]/g);
    const eng = password.search(/[a-z]/ig);
    if (password.length < 7 || password.length > 20) {
      alert('비밀번호를 6자리 ~ 20자리 이내로 입력해주세요.');
      return false;
    } else if ((spe < 0 && num < 0) || (spe < 0 && eng < 0) || (num < 0 && eng < 0)) {
      alert('영문, 숫자, 특수문자 중 2가지 이상 혼합하여 입력해주세요.');
      return false;
    }
    if (password !== joinAccount.psCheck) {
      alert('비밀번호가 일치하지 않습니다.');
    } else {
      axios.post('https://clean-chat.kumas.dev/api/users', {name, email: id, password, gender, imagePath: basicImg})
      .then((res)=>{
        console.log(res);
        console.log('회원가입 성공.');
        setJoinAccount({ name:'', id: '', password: '' });
        history.push('/');
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }

  // 친구 계정.
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

  // 친구 검색 input & onChange.
  const [search, setSearch] = useState('');
  const searchOnChange = function(e) {
    setSearch(e.target.value);
  }

  // 삭제할 친구 선택 함수.
  const deleteModal = function(id) {
    setUser(
      user.map((user) => {
        return user.id === id ? { ...user, active: !user.active } : user;
      })
    )
  }
  // 친구 삭제 취소 함수.
  const deleteCancel = function(id) {
    if (user[id].active === true) {
      let arr = [...user];
      arr = arr[id].active = !arr[id].active;
      setUser(arr);
  }
  }
  // 친구 식제 함수.
  const friendsDelete = function(id) {
    if (user[id].active === true) {
      let arr = [...user];
      arr.splice(id, 1);
      // id값 수정.
      for (let i = 0; i < arr.length; i++) {
        arr[i].id = i;
      }
      setUser(arr);
    } else {
      console.log('취소')
      return false;
    }
  }

// 채팅방 state.
const [chatingRoom, setChatingRoom] = useState([]);

// 채팅방에 추가할 함수.
const plusChatingRoom = function(id) {
  const users = user[id];
  const arr = [...chatingRoom, users];
  setChatingRoom(arr);
  if (chatingRoom !== null) {
    history.push(`/chatingroom/${id}`);
  }
}


  // 변경할 이름 받아올 state.
  const [nickNameEdit, setNickNameEdit] = useState({ names: '' });

  // 변경할 이름 input.value 받아오는 함수.
  const onChange = function(e) {
    setNickNameEdit({ ...nickNameEdit, [e.target.name]: e.target.value })
  }

  // 클릭시 이름 변경하는 함수.
  const nameChange = function() {
    // 입력받은거 myAccount.name에 붙여넣기
    const arr = { ...myAccount };
    arr.name = nickNameEdit.names;
    setMyAccount(arr);
    // 수정하면 자동으로 로컬스토리지 업데이트.
    setNickNameEdit({ names: '' });
  }


  // 친구 추가 함수.
  const userAdd = function(users) {
    const arr = [...user, users];
    setUser(arr);
    console.log('친구추가!')
  }

  return (
    <div className="App">
      <div className="app-box">
        {/* 로그인 */}
      <Route exact path="/">
        <Login 
        history={history} 
        idInput={idInput}
        loginFn={loginFn} 
        accountOnChange={accountOnChange}
        loginId={loginId}
        loginPs={loginPs}
        />
      </Route>
      {/* 회원가입 */}
      <Route path="/signup">
        <Signup 
        setGender={setGender}
        genderSelectFn={genderSelectFn}
        signupFn={signupFn}
        selectGender={selectGender} 
        setSelectGender={setSelectGender}
        history={history} 
        joinOnChange={joinOnChange} 
        joinAccount={joinAccount}
        joinPsOnChange={joinPsOnChange}
        />
      </Route>
      

      {/* navigation */}
      <Nav history={history} />
      {/* 액션버튼s */}
      <Route path={['/', '/friends', '/chat', '/chatingroom/:id', '/search']}>
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
      <Route path="/friends/setting">
        <Setting history={history} logoutFn={logoutFn} />
      </Route>
      {/* 채팅목록 */}
      <Route path="/chat">
        <Chat history={history} chatingRoom={chatingRoom} />
      </Route>
      {/* 채팅창 */}
      <Route path="/chatingroom/:id">
        <ChatingRoom chatingRoom={chatingRoom} history={history} />
      </Route>

      {/* 친구찾기 */}
      <Route path="/search">
        <Search 
        history={history}
        user={user}  
        search={search} 
        searchOnChange={searchOnChange} 
        />
      </Route>
      {/* 친구추가 */}
      <Route path="/searchemail">
        <SearchEmail history={history} basicImg={basicImg} userAdd={userAdd} />
      </Route>
      {/* 친구관리창 */}
      <Route path="/friendsremove">
        <FriendsRemove history={history} user={user} deleteModal={deleteModal} />
      </Route>
      {/* 친구삭제모달창 */}
        <Route path="/friendsremove/delete/:id">
          <Delete 
          user={user} 
          history={history} 
          deleteCancel={deleteCancel} 
          deleteModal={deleteModal} 
          friendsDelete={friendsDelete} 
          />
        </Route>
      {/* 내 프로필 설정 */}
      <Route path="/myprofile">
        <MyProfile 
        basicImg={basicImg}
        nameChange={nameChange} 
        history={history} 
        onChange={onChange} 
        myAccount={myAccount}
        />
      </Route>
      {/* 내 프로필 이미지 변경 */}
      <Route path="/myprofile/profileimageedit">
        <ProfileImageEdit 
        myAccount={myAccount}
        setMyAccount={setMyAccount}
        history={history}
        basicImgChange={basicImgChange}
        />
      </Route>

      <Route path="/friends/friendsmodal/:id">
        <FriendsModal plusChatingRoom={plusChatingRoom} history={history} user={user} />
      </Route>

      </div>
    </div>
  );
}

function Nav(props) {
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
      navSite.map(({ site, title, id })=>{
        return (<>
        <Route exact path={site}>
        <div key={id} >{title}</div>
        <div>
          <i onClick={()=>{
            props.history.push('/friends/setting')
          }} className="fas fa-cog"></i>
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
