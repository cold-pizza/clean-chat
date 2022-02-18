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
// function
import chatAlarm from './controller/chatAlarmFn';
import urlLimitFn from './controller/urlLimitFn';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://clean-chat.kumas.dev';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const alarm = useSelector(state => state.switchReducer.alarm);
  const messageData = useSelector(state => state.stateReducer.message);
  const myAccount = useSelector(state => state.stateReducer.myAccount);

  useEffect(() => {
    chatAlarm(messageData, dispatch);
  }, [dispatch, messageData]);

  useEffect(() => {
    if (myAccount !== null && window.location.pathname === '/clean-chat/') {
      import('./controller/logoutFn')
      .then(({ default: logout }) => {
        logout(history);
      })
    }
    urlLimitFn(myAccount, history);
  }, [history, myAccount]);

  return (
    <div className="App">
      <div className="app-box">
      <Nav history={history} />
      <Route exact path="/" render={() => <Login history={history} /> }/>
      <Route path="/signup" render={() => <Signup history={history} />} />
      <Route path={['/friends', '/chat',  '/search', '/setting/:site']} 
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