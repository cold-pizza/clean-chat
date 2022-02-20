
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router';
import io from 'socket.io-client';
import './style.scss';
import OtherContent from '../../view/otherContent';
import MyContent from '../../view/myContent';

import msgSearchFn from '../../controller/msgSearchFn';
import socketMsgFn from '../../controller/socketMsgFn';
import chatingSencerFn from '../../controller/chatingSencerFn';
import onChange from '../../controller/onChange';
import { useSelector, useDispatch } from 'react-redux';

function ChatingRoom(props) {
    const dispatch = useDispatch();
    const { id } = useParams();
    const chatContents = useSelector(state => state.stateReducer.chatContents);
    const chatingRoom = useSelector(state => state.stateReducer.chatingRoom);
    const myAccount = useSelector(state => state.stateReducer.myAccount);
    const scrollRef = useRef(null);
    const [inputSwitch, setInputSwitch] = useState(false);
    const [talk, setTalk] = useState({ ment: '' });
    const { ment } = talk;
    const onChangeCallback = useCallback(e => onChange(e, talk, setTalk), [talk]);

    useEffect(() => {
        socketMsgFn(io, dispatch);
        return console.log("로딩");
    }, [dispatch]);

    useEffect(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        return console.log('정렬');
    }, [chatContents]);

    const chatNameFilterFn = function(chatingRoom, id) {
        const list = [...chatingRoom];
        list.filter(list => list.id === id);
        return list[0].chatUsers[0].name;
    }

    return <div className="chating-room">
        <nav>
        <i onClick={()=>{ 
            msgSearchFn(id, dispatch);
            props.history.goBack();
        }} className="fas fa-chevron-left"></i>
        <p className="name">{chatingRoom !== null ? chatNameFilterFn(chatingRoom, id) : null}</p>
        <div></div>
        </nav>
        <section ref={scrollRef} className="chating-form">
            {
                chatContents.length > 0 ? chatContents.map((list, i) => {
                    if (list.User) {
                        if (list.User.id === myAccount.id) {
                            return <MyContent key={i} list={list} />
                        } else 
                        return <OtherContent key={i} list={list} chatName={chatNameFilterFn(chatingRoom, id)} />
                    } else if (list.UserId) {
                        return <MyContent key={i} list={list} />
                    } else {
                        return <OtherContent key={i} list={list} chatName={chatNameFilterFn(chatingRoom, id)} />
                    }
                }) : console.log('chatContents === null')
            }
        </section>
        <div className="chating-input">
        <input 
        onChange={e => onChangeCallback(e)}  
        onKeyUp={chatingSencerFn(ment, inputSwitch, setInputSwitch)}
        value={ment} 
        name="ment" 
        id="chating" 
        type="text" 
        />
        <button>
            { inputSwitch ? 
            <i onClick={()=>{
                dispatch({ 
                    type: "CREATE_MESSAGE", 
                    payload: { id, message: ment, setTalk } });
                    setInputSwitch(!inputSwitch);
        }} className="fas fa-arrow-up"></i>
         : null }
        </button>
        </div>
    </div>
}

export default React.memo(ChatingRoom);