import './style.scss';
import axios from 'axios';
import React, { useEffect } from 'react';

// import chatMsgSearchFn from '../../controller/chatMsgSearchFn';

function Friends(props) {    
    useEffect(()=>{
        props.setMyAccount(JSON.parse(localStorage.getItem('myInfo')));
        props.setUser(JSON.parse(localStorage.getItem('user')));
        props.setChatingRoom(JSON.parse(localStorage.getItem('chatingRoom')));
        return console.log('업데이트 되었습니다.');
      }, []);


    return <div className="friends">
        <section onClick={()=>{
            props.history.push('/myprofile');
        }} className="my-profile">
            <img src={props.myAccount !== null ? props.myAccount.imagePath : props.basicImg } alt="#" />
            <p>{props.myAccount !== null ? props.myAccount.name : '로딩중입니다.'}</p>
        </section>
        <div className="friends-number">
            <p>친구 {props.user !== null ? props.user.length : 0 }</p>
        </div>
        <ul className="friends-list">
        {
            props.user !== null ?
            props.user.map(({ name, imagePath }, i)=>{
                return (
                <li onClick={()=>{
                    props.history.push(`/friends/friendsmodal/${i}`)
                }}>
                    <img 
                    src={imagePath !== "" ? axios.defaults.baseURL + imagePath : props.basicImg} 
                    alt={imagePath !== "" ? axios.defaults.baseURL + imagePath : props.basicImg} 
                    />
                    <p>{name}</p>
                </li>
                )
            }) : '친구가 없습니다.'
        }
        </ul>
        <button onClick={() => {
            props.setChatAlarmSwitch(!props.chatAlarmSwitch);
            console.log(props.chatAlarmSwitch);
        }}>채팅알림</button>
        <button onClick={() => {
            props.setChatBubbleSwitch(!props.chatBubbleSwitch);
        }}>채팅풍선알림</button>
    </div>
}

export default React.memo(Friends);