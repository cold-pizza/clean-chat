
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import io from 'socket.io-client';
import './style.scss';

import createMsgFn from '../../controller/createMsgFn';
import msgSearchFn from '../../controller/msgSearchFn';
import socketCallFn from '../../controller/socketCallFn';
import createMsgFn2 from '../../controller/createMsgFn2';
import chatSequeanceFn from '../../controller/chatSequenceFn';

function ChatingRoom(props) {
    const { id } = useParams();
    const [otherChat, setOtherChat] = useState(null);
    useEffect(() => {
        props.setChatingRoom(JSON.parse(localStorage.getItem('chatingRoom')));
        const chatContents = JSON.parse(localStorage.getItem(`chatContents_${id}`));
        setOtherChat(chatContents);
        // console.log(otherChat);
        const socketio = io('wss://clean-chat.kumas.dev');
        socketio.on('conn', () => {
            socketCallFn(socketio.id);
        });
        return console.log('채팅기록 로딩 끝');
    }, [])
    
    // input 이벤트 내용.
    const [talk, setTalk] = useState({ ment: '' });
    const { ment } = talk;

    const chatingOnChange = function(e) {
        setTalk({...talk, [e.target.name]: e.target.value});
    }
    return <div className="chating-room">
        <nav>
        <i onClick={()=>{
            msgSearchFn(id, props.chatingRoom, props.setChatingRoom);
            props.history.goBack();
        }} className="fas fa-chevron-left"></i>
        <p className="name">{props.chatingRoom[id].chatUsers[0].name}</p>
        <div></div>
        </nav>
        <section className="chating-form">
            {
                otherChat !== null ? chatSequeanceFn(otherChat).map((list, i) => {
                    if (otherChat[0].User.id === props.myAccount.id) {
                        if (i % 2 === 0) {
                            return <MyContent list={list} />
                        } else {
                            return <OtherContent 
                            basicImg={props.basicImg} 
                            chatingRoom={props.chatingRoom} 
                            list={list} id={id} />
                        }
                    } else {
                        if (i % 2 !== 0) {
                            return <MyContent list={list} />
                        } else {
                            return <OtherContent 
                            basicImg={props.basicImg} 
                            chatingRoom={props.chatingRoom} 
                            list={list} id={id} />
                        }
                    }
                }) : null
            }
        </section>
        <div className="chating-input">
        <input 
        onChange={chatingOnChange}  
        value={ment} 
        name="ment" 
        id="chating" 
        type="text" 
        />
        <button>
            <i 
            onClick={()=>{
            // createMsgFn(
            //     props.chatingRoom[id].id, 
            //     ment, 
            //     setTalk, 
            //     otherChat,
            //     setOtherChat
            //     );
            createMsgFn2(props.chatingRoom[id].id, ment, otherChat, setOtherChat, setTalk);
        }} className="fas fa-arrow-up"></i>
        </button>
        </div>
    </div>
}

const MyContent = function(props) {
    return <div>
        {
            props.list.map(list => {
                return <div className="me">
                <div>
                    <p className="comment">{list.content}</p>
                    <p className="time"></p>
                </div>
                </div>
        })
    } 
    </div> 
}

const OtherContent = function(props) {
    return <div>
        {
            props.list.map(({content}) => {
                return <div className="you">
                <img src={props.basicImg} alt={props.basicImg} />
                        <div className="meta-info">
                            <div className="info">
                                <p>{props.chatingRoom[props.id].chatUsers[0].name}</p>
                                <span className="comments">{content}</span>
                            </div>
                        </div>
                    <p className="times"></p>
                </div>
            })
        }
    </div>
}

export default React.memo(ChatingRoom);