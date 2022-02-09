import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import './style.scss';
import { useSelector } from 'react-redux';

import chatRoomRemoveFn from '../../controller/chatRoomRemoveFn';

function Chat(props) {
    const basicImg = useSelector(state => state.basicImg);
    const [chatRemoveSwitch, setChatRemoveSwitch] = useState(false);
    const chatBubble = useSelector(state => state.chatBubble);
    const [removeNum, setRemoveNum] = useState(null);
    useEffect(() => {
        props.setChatingRoom(JSON.parse(localStorage.getItem('chatingRoom')));
        props.setMyAccount(JSON.parse(localStorage.getItem('myInfo')));
        return console.log('로딩 끝');
    }, [])

    
    const [bubbleNum, setBubbleNum] = useState([
        {
            id: '',
            number: '3',
            active: false
        },
        {
            id: '',
            number: '4',
            active: false
        },
        {
            id: '',
            number: '5',
            active: false
        }
    ]);
    return <div className="chat">
        {
            props.chatingRoom !== null ?
            props.chatingRoom.map(({ chatUsers, ChatContent, id }, i)=>{
                return <li key={id}>
            <div onClick={()=>{
            props.history.push(`/chatingroom/${i}`);
        }} className="meta-data">
                <img src={basicImg} alt={basicImg} />
                <section>
                    <div className="data">
                    <span className="name">{chatUsers[0].name}</span>
                    { chatBubble ? <div className="red-dot">1</div> : null}
                    {
                        bubbleNum !== null ?
                        (!bubbleNum ?
                        <span className="alarm">{bubbleNum[0].number}</span>
                        : null) : null
                    }
                    </div>
                    <p className="content">{ChatContent ? ChatContent.content : null}</p>
                </section>
            </div>
            <i onClick={() => {
                setChatRemoveSwitch(!chatRemoveSwitch);
                setRemoveNum(i);
            }} className="fas fa-minus minus"></i>
        </li>
            }) : <p className="no-chat-modal">채팅방이 없습니다.</p>
        }
        {
            chatRemoveSwitch ? <div className="chat-remove-modal">
                <p className="chat-title">{props.chatingRoom[removeNum].chatUsers[0].name}</p>
                <p>방을 나가시겠습니까?</p>
                <div className="btns">
                    <button onClick={() => {
                        chatRoomRemoveFn(props.chatingRoom[removeNum].id);
                        setChatRemoveSwitch(!chatRemoveSwitch);
                    }}>Yes</button>
                    <button onClick={() => {
                        setChatRemoveSwitch(!chatRemoveSwitch);
                    }}>No</button>
                </div>
            </div> : null
        }
    </div>
}


export default React.memo(Chat);