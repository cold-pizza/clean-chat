
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import io from 'socket.io-client';
import './style.scss';
import OtherContent from '../../view/otherContent';
import MyContent from '../../view/myContent';

import msgSearchFn from '../../controller/msgSearchFn';
import socketMsgFn from '../../controller/socketMsgFn';
import chatingSencerFn from '../../controller/chatingSencerFn';
import { useSelector, useDispatch } from 'react-redux';

function ChatingRoom(props) {
    const dispatch = useDispatch();
    const { id } = useParams();
    const chatContents = useSelector(state => state.stateReducer.chatContents);
    const scrollRef = useRef(null);
    const [inputSwitch, setInputSwitch] = useState(false);
    const [talk, setTalk] = useState({ ment: '' });
    const { ment } = talk;

    useEffect(() => {
        props.setChatingRoom(JSON.parse(localStorage.getItem('chatingRoom')));
        socketMsgFn(io, dispatch);
        return console.log("로딩");
    }, []);

    useEffect(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        return console.log('정렬');
    }, [chatContents]);

    const chatingOnChange = function(e) {
        setTalk({...talk, [e.target.name]: e.target.value});
    }

    return <div className="chating-room">
        <nav>
        <i onClick={()=>{ 
            msgSearchFn(props.chatingRoom[id].id, props.setChatingRoom);
            props.history.goBack();
        }} className="fas fa-chevron-left"></i>
        <p className="name">{props.chatingRoom !== null ? props.chatingRoom[id].chatUsers[0].name : null}</p>
        <div></div>
        </nav>
        <section ref={scrollRef} className="chating-form">
            {
                chatContents.length > 0 ? chatContents.map((list, i) => {
                    if (list.User) {
                        if (list.User.id === props.myAccount.id) {
                            return <MyContent key={i} list={list} />
                        } else 
                        return <OtherContent key={i} list={list} chatName={props.chatingRoom[id].chatUsers[0].name} />
                    } else if (list.UserId) {
                        return <MyContent key={i} list={list} />
                    } else {
                        return <OtherContent key={i} list={list} chatName={props.chatingRoom[id].chatUsers[0].name} />
                    }
                }) : console.log('chatContents === null')
            }
        </section>
        <div className="chating-input">
        <input 
        onChange={chatingOnChange}  
        onKeyUp={chatingSencerFn(ment, inputSwitch, setInputSwitch)}
        value={ment} 
        name="ment" 
        id="chating" 
        type="text" 
        />
        <button>
            { inputSwitch ? 
            <i 
            onClick={()=>{
                dispatch({ 
                    type: "CREATE_MESSAGE", 
                    payload: { id: props.chatingRoom[id].id, message: ment, setTalk } });
                    setInputSwitch(!inputSwitch);
        }} className="fas fa-arrow-up"></i>
         : null }
        </button>
        </div>
    </div>
}

export default ChatingRoom;