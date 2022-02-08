
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import io from 'socket.io-client';
import './style.scss';
import OtherContent from '../../view/otherContent';
import MyContent from '../../view/myContent';

// import createMsgFn from '../../controller/createMsgFn';
import msgSearchFn from '../../controller/msgSearchFn';
import socketCallFn from '../../controller/socketCallFn';
import createMsgFn2 from '../../controller/createMsgFn2';
function ChatingRoom(props) {
    const { id } = useParams();
    const [otherChat, setOtherChat] = useState(null);
    const scrollRef = useRef(null);
    const [msg, set] = useState(null);
    useEffect(() => {
        props.setChatingRoom(JSON.parse(localStorage.getItem('chatingRoom')));
        const chatContents = JSON.parse(localStorage.getItem(`chatContents_${id}`));
        setOtherChat(chatContents);
        const socketio = io('wss://clean-chat.kumas.dev');
        socketio.on('conn', () => {
            socketCallFn(socketio.id);
            socketio.on('message', data => {
                console.log(data);
                set(data);
            });
        });
        console.log(msg);
        if (msg !== null) {
            setOtherChat([...otherChat, msg]);
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
        return console.log('채팅기록 로딩 끝');
    }, []);

    useEffect(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        return console.log('정렬');
    }, [otherChat]);

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
        <section ref={scrollRef} className="chating-form">
            {
                otherChat !== null ? otherChat.map((list, i) => {
                    if (list.User) {
                        if (list.User.id === props.myAccount.id) {
                            return <MyContent key={i} list={list} />
                        } else return <OtherContent key={i} list={list} id={id} chatingRoom={props.chatingRoom} />
                    } else return <OtherContent key={i} list={list} id={id} chatingRoom={props.chatingRoom} />
                }) : null
            }
            {/* {
                otherChat !== null ? chatSequeanceFn(otherChat).map((list, i) => {
                    if (otherChat[0].User.id === props.myAccount.id) {
                        if (i % 2 === 0) {
                            return <MyContent list={list} />
                        } else {
                            return <OtherContent 
                            chatingRoom={props.chatingRoom} 
                            list={list} id={id} />
                        }
                    } else {
                        if (i % 2 !== 0) {
                            return <MyContent list={list} />
                        } else {
                            return <OtherContent 
                            chatingRoom={props.chatingRoom} 
                            list={list} id={id} />
                        }
                    }
                }) : null
            } */}
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
            createMsgFn2(props.chatingRoom[id].id, ment, otherChat, setOtherChat, setTalk);
        }} className="fas fa-arrow-up"></i>
        </button>
        </div>
    </div>
}

export default React.memo(ChatingRoom);