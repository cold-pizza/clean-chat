import React from 'react';
import { Route } from 'react-router-dom';
import './style.scss';
import logoutFn from '../../controller/logoutFn';
import SearchUser from '../searchUser';
import FriendsRemove from '../friendsremove';

function Setting(props) {
    return <div className="setting">
        <div className="btns">
            <button onClick={()=>{
                props.history.push('/setting/searchuser');
            }} type="button">친구추가</button>
            <button onClick={()=>{
                props.history.push('/setting/friendsremove');
            }} type="button">친구삭제</button>
            <button onClick={()=>{
                logoutFn(props.history);
            }}>로그아웃</button>
            <button onClick={()=>{
                props.history.goBack();
            }} type="button">취소</button>
        </div>
        <Route exact path="/setting/searchuser" render={() => <SearchUser />} />
        <Route path="/setting/friendsremove" render={() => <FriendsRemove history={props.history} />} />
    </div>
}

export default Setting;