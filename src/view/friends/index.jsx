import './style.scss';
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import imageOutputFn from '../../controller/imageOutputFn';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import msgReceiveFn from '../../controller/msgReceiveFn';
import FriendsModal from '../friendsmodal';

function Friends(props) {    
    const dispatch = useDispatch();
    const users = useSelector(state => state.stateReducer.users);
    const myAccount = useSelector(state => state.stateReducer.myAccount);
    useEffect(()=>{
        if (localStorage.length > 1) {
            const pathLen = window.location.pathname.split('/').length;
            if (pathLen < 5) {   
                msgReceiveFn(io, dispatch);
            }
        }
        return console.log('cleanup');
      }, []);
      
    return <div className="friends">
        <section onClick={()=>{
            props.history.push('/myprofile');
        }} className="my-profile">
            <img src={myAccount ? imageOutputFn(myAccount.imagePath) : null} 
            alt={myAccount ? imageOutputFn(myAccount.imagePath) : null} />
            <p>{myAccount ? myAccount.name : '로딩중입니다.'}</p>
        </section>
        <div className="friends-number">
            <p>친구 {users?.length || 0 }</p>
        </div>
        <ul className="friends-list">
        {
            users ?
            users.map(({ name, imagePath, id }, i)=>{
                return (
                <li key={id} onClick={()=>{
                    props.history.push(`/friends/friendsmodal/${i}`)
                }}>
                    <img 
                    src={imageOutputFn(imagePath)} 
                    alt={imageOutputFn(imagePath)} 
                    />
                    <p>{name}</p>
                </li>
                )
            }) : '친구가 없습니다.'
        }
        </ul>
        <Route path="/friends/friendsmodal/:id" render={() => <FriendsModal />} />
    </div>
    
}

export default Friends;