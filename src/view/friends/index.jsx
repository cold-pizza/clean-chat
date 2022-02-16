import './style.scss';
import React, { useEffect } from 'react';
import imageOutputFn from '../../controller/imageOutputFn';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import msgReceiveFn from '../../controller/msgReceiveFn';

function Friends(props) {    
    const dispatch = useDispatch();
    const basicImg = useSelector(state => state.basicReducer.basicImg);
    const users = useSelector(state => state.stateReducer.users);
    const myAccount = useSelector(state => state.stateReducer.myAccount);
    console.log(users);
    console.log(myAccount)
    useEffect(()=>{
        dispatch({ type: "SET_USERS", payload: JSON.parse(localStorage.getItem('users')) });
        dispatch({ type: "SET_MY_ACCOUNT", payload: JSON.parse(localStorage.getItem('myInfo')) });
        msgReceiveFn(io, dispatch);
        return console.log('업데이트 되었습니다.');
      }, []);
      
    return <div className="friends">
        <section onClick={()=>{
            props.history.push('/myprofile');
        }} className="my-profile">
            <img src={myAccount.imagePath} alt={myAccount.imagePath} />
            <p>{myAccount !== null ? myAccount.name : '로딩중입니다.'}</p>
        </section>
        <div className="friends-number">
            <p>친구 {users !== null ? users.length : 0 }</p>
        </div>
        <ul className="friends-list">
        {
            users !== null ?
            users.map(({ name, imagePath, id }, i)=>{
                return (
                <li key={id} onClick={()=>{
                    props.history.push(`/friends/friendsmodal/${i}`)
                }}>
                    <img 
                    src={imageOutputFn(imagePath, basicImg)} 
                    alt={imageOutputFn(imagePath, basicImg)} 
                    />
                    <p>{name}</p>
                </li>
                )
            }) : '친구가 없습니다.'
        }
        </ul>
        {/* <button onClick={() => {
            dispatch({type: "SWITCH_ALARM", payload: { id: 0 }});
            console.log(test);
        }}>payload 테스트</button>
        <button onClick={() => {
            dispatch({ type: "SWITCH_CHATING_BUBBLE" })
        }}>채팅기록 수정하기</button> */}
    </div>
    
}

export default React.memo(Friends);