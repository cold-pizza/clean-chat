import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
// 컴포넌트
import './App.scss';
import Nav from './view/nav';
import Login from './view/login';
import Signup from './view/signup';
import Chat from './view/chat';
import Search from './view/search';
import Setting from './view/setting';
import MyProfile from './view/myprofile';
import Friends from './view/friends';
import Action from './view/action';
import ChatingAlarm from './view/chatingAlarm';

import urlLimitFn from './controller/urlLimitFn';
import checkLogoutFn from './controller/checkLogoutFn'
import chatAlarm from './controller/chatAlarmFn';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://clean-chat.kumas.dev';

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const alarm = useSelector(state => state.switchReducer.alarm);
  const myAccount = useSelector(state => state.stateReducer.myAccount);
  const messageData = useSelector(state => state.stateReducer.message);
  useEffect(() => {
    // checkLogoutFn(myAccount, history);
    urlLimitFn(myAccount, history);
    return () => console.log('url확인');
  }, [history, myAccount]);

  useEffect(() => {
    if (localStorage.length > 1) {
      const pathLen = window.location.pathname.split('/').length;
      if (pathLen < 5) {
          chatAlarm(messageData, dispatch);
      }
    }
    return console.log('채팅알람');
}, [dispatch, messageData]);

  return (
    <div className="App">
      <div className="app-box">
      <Nav history={history} />
      <Route exact path="/" render={() => <Login history={history} /> }/>
      <Route path="/signup" render={() => <Signup history={history} />} />
      <Route path={['/friends', '/chat', '/search', '/setting/:site']} 
      render={() => <Action history={history} />} />
       <Route path="/friends" render={() => <Friends history={history} />} />
      <Route path="/chat" render={() => <Chat history={history} />} />    
      <Route path="/search" render={() => <Search history={history} />} />
      <Route path="/myprofile" render={() => <MyProfile history={history} />} />
      <Route path="/setting" render={() => <Setting history={history} />} />
      { alarm ? <ChatingAlarm /> : null }
      </div>
    </div>
  );
}

export default App;