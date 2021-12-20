import React from 'react';
import Login from './components/login';
import Signup from './components/signup';
import Friends from './components/friends';
import './App.scss';

import { Route, useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();
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
      {/* 친구창 */}
      <Route path="/friends">
      <Nav />
        <Friends />
        <Action history={history} />
      </Route>
      </div>
    </div>
  );
}

function Nav() {
  return <div className="nav">
    <div>친구</div>
    <div>설정</div>
  </div>
}

function Action(props) {
  return <div className="action">
    <i onClick={()=>{
      props.history.push('/freinds');
    }} className="fas fa-user"></i>
    <i className="fas fa-comment"></i>
    <i className="fas fa-search"></i>
    <i className="fas fa-cog"></i>
    </div>
}

export default App;
