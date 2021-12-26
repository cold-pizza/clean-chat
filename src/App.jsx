import React, { useState, useRef, useEffect } from 'react';
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

function App() {
  const history = useHistory();

  // 로그인 계정.
  const [account, setAccount] = useState({ id: 'hi@naver.com', password: '1234' });

  // 아이디 입력 state.
  const [idInput, setIdInput] = useState({ id: "", password: "" });

  const accountOnChange = function(e) {
    setIdInput({ ...idInput, [e.target.name]: e.target.value });
  }

  // 로그인 함수.
  const loginFn = async function(id, password) {
     const db = await axios.get('http://localhost:8000/users');
     // 데이터 요청.
      if (db) {
        const users = db.data;
        // 같은 이메일 찾기.
        const user = users.find((user)=>{
          return user.id === id;
        })
        if (!user || user.password !== password) {
          throw new Error('아이디 또는 비밀번호가 다릅니다.')
        } else {
          console.log('로그인 성공!');
          history.push('/friends');
        }
      } else {
        throw new Error('서버 통신이 원활하지 않습니다.')
      }
  }

// 성별 button state.
const [selectGender, setSelectGender] = useState(false);

 // 회원가입 state & onChange.
 const [joinAccount, setJoinAccount] = useState({ name: '', id: '', password: '' });
 const { name, id, password } = joinAccount;
 const [gender, setGender] = useState('');
 const joinOnChange = function(e) {
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
  console.log(joinAccount.name)
  // 회원가입 함수.
  const signupFn = function() {
   axios.post('http://localhost:8000/users', {name, id, password, gender})
    .then(()=>{
      if (name === '' || id === '' || password === '') {
        alert('이름, 이메일 또는 비밀번호를 입력해주세요.')
      } else {
        console.log('회원가입 성공.');
        setJoinAccount({ name:'', id: '', password: '', sex: '' });
        history.push('/');
      }
    })
    .catch((error)=>{
      console.log(error);
    })
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
      user.map((user)=>{
        return user.id === id ? { ...user, active: !user.active } : user;
      })
    )
  }



  // 내 이름 state.
  const [nickName, setNickName] = useState({ names: '재홍' });
  const { names } = nickName;

  // 변경할 이름 받아올 state.
  const [nickNameEdit, setNickNameEdit] = useState({ nameEdit: '' });

  // 변경할 이름 input.value 받아오는 함수.
  const onChange = function(e) {
    setNickNameEdit({ ...nickNameEdit, [e.target.name]: e.target.value })
  }

  // 클릭시 이름 변경하는 함수.
  const nameChange = function() {
    setNickName(nickNameEdit);
    setNickNameEdit({ nameEdit: '' });
  }

  // 마이 프로필 사진.
  const [myImage, setMyImage] = useState({ img: 'https://cold-pizza.github.io/clean-chat/images/happy.jpg' });
  const { img } = myImage;

  // 기본 이미지 state.
  const [basicImage, setBasicImage] = useState([{
    id: 0,
    img: 'https://cold-pizza.github.io/clean-chat/images/happy.jpg'
  }, {
    id: 1,
    img: 'https://cold-pizza.github.io/clean-chat/images/1.jpg'
  }, {
    id: 2,
    img: 'https://cold-pizza.github.io/clean-chat/images/2.jpg'
  }, {
    id: 3,
    img: 'https://cold-pizza.github.io/clean-chat/images/3.jpg'
  }, {
    id: 4,
    img: 'https://cold-pizza.github.io/clean-chat/images/4.jpg'
  }]);

  // 기본 이미지 선택 함수.
  const selectBasicImage = function(id) {
    let arr = [...basicImage];
    setMyImage(arr[id]);
  }

  // 채팅창 채팅방 목록.
  const [chatRoom, setChatRoom] = useState({
    name: '',
    img: '',
    comments:'',
    day: ''
  });
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
        />
      </Route>

      {/* navigation */}
      <Nav history={history} />
      {/* 액션버튼s */}
      <Action history={history} />
      {/* 친구창 */}
      <Route path="/friends">
        <Friends img={img} names={names} user={user} history={history} />
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
        <Search user={user}  
        search={search} 
        searchOnChange={searchOnChange} 
        />
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
        <MyProfile 
        img={img} 
        nameChange={nameChange} 
        history={history} 
        name={name} 
        onChange={onChange} 
        />
      </Route>
      {/* 내 프로필 이미지 변경 */}
      <Route path="/myprofile/profileimageedit">
        <ProfileImageEdit 
        selectBasicImage={selectBasicImage} 
        basicImage={basicImage} 
        history={history}
        />
      </Route>

      <Route path="/friends/friendsmodal">
        <FriendsModal history={history} />
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
        <div key={id}>{title}</div>
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
