import React, { useEffect, useState } from 'react';
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';

function Chat(props) {
    const dispatch = useDispatch();
    const SWITCH_CHAT_REMOVE = "SWITCH_CHAT_REMOVE";
    const chatRemoveSwitch = useSelector(state => state.switchReducer.chatRemoveSwitch);
    const basicImg = useSelector(state => state.basicReducer.basicImg);
    const chatBubble = useSelector(state => state.switchReducer.chatBubble);
    const chatingRoom = useSelector(state => state.stateReducer.chatingRoom);
    console.log(chatingRoom);
    const [removeNum, setRemoveNum] = useState(null);
    return <div className="chat">
        {
            chatingRoom !== null ?
            chatingRoom.map(({ chatUsers, ChatContent, id }, i)=>{
                return <li key={id}>
            <div onClick={()=>{
            props.history.push(`/chatingroom/${i}`);
            dispatch({ type: "GET_MESSAGE", payload: { id: i } });
        }} className="meta-data">
                <img src={basicImg} alt={basicImg} />
                <section>
                    <div className="data">
                    <span className="name">{chatUsers[0].name}</span>
                    { chatBubble ? <div className="red-dot">1</div> : null}
                    </div>
                    <p className="content">{ChatContent ? ChatContent.content : null}</p>
                </section>
            </div>
            <i onClick={() => {
                dispatch({ type: SWITCH_CHAT_REMOVE });
                setRemoveNum(i);
            }} className="fas fa-minus minus"></i>
        </li>
            }) : <p className="no-chat-modal">채팅방이 없습니다.</p>
        }
        {
            chatRemoveSwitch ? <div className="chat-remove-modal">
                <p className="chat-title">{chatingRoom[removeNum].chatUsers[0].name}</p>
                <p>방을 나가시겠습니까?</p>
                <div className="btns">
                    <button onClick={() => {
                        dispatch({ type: "REMOVE_CHATINGROOM", payload: {id: chatingRoom[removeNum].id} })
                        dispatch({ type: SWITCH_CHAT_REMOVE });
                    }}>Yes</button>
                    <button onClick={() => {
                        dispatch({ type: SWITCH_CHAT_REMOVE });
                    }}>No</button>
                </div>
            </div> : null
        }
    </div>
}


export default Chat;