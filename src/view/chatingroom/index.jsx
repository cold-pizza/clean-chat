
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
import chatNameFilterFn from '../../controller/chatNameFilterFn';
import getScrollMessage from '../../controller/getScrollMessage';
import { useSelector, useDispatch } from 'react-redux';

function ChatingRoom(props) {
    const dispatch = useDispatch();
    const { id } = useParams();
    const chatContents = useSelector(state => state.stateReducer.chatContents);
    const chatingRoom = useSelector(state => state.stateReducer.chatingRoom);
    const myAccount = useSelector(state => state.stateReducer.myAccount);
    const [inputSwitch, setInputSwitch] = useState(false);
    const [talk, setTalk] = useState({ ment: '' });
    const { ment } = talk;
    const scrollRef = useRef(null);
    const [height, setHeight] = useState(null);
    const onChangeCallback = useCallback(e => onChange(e, talk, setTalk), [talk]);

    useEffect(() => {
        socketMsgFn(io, dispatch);
        return () => console.log("로딩");
    }, [dispatch]);

    useEffect(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        setHeight(scrollRef.current.scrollHeight);
        console.log(height);
        return () => console.log('정렬');
    }, [chatContents, height]);

    const handleScroll = (e) => {
        console.log(scrollRef.current.scrollTop);
        if (scrollRef.current.scrollTop === 0) {
            getScrollMessage(id, dispatch);
            const beforeY = height;
            const Y = scrollRef.current.scrollHeight;
            scrollRef.current.scrollTop = Y - beforeY;
        }
    };

    return <div className="chating-room">
        <nav>
        <i onClick={()=>{ 
            msgSearchFn(id, dispatch);
            props.history.goBack();
        }} className="fas fa-chevron-left"></i>
        <p className="name">{chatingRoom ? chatNameFilterFn(chatingRoom, id) : null}</p>
        <div></div>
        </nav>
        <section ref={scrollRef}
         onScroll={handleScroll} 
         className="chating-form">
            {
                chatContents ? chatContents.map((list, i) => {
                    if (list?.User) {
                        if (list.User.id === myAccount.id) {
                            return <MyContent key={i} list={list} />
                        } else 
                        return <OtherContent key={i} list={list} chatName={chatNameFilterFn(chatingRoom, id)} />
                    } else if (list?.UserId) {
                        return <MyContent key={i} list={list} />
                    } else {
                        return <OtherContent key={i} list={list} chatName={chatNameFilterFn(chatingRoom, id)} />
                    }
                }) : console.log('chatContents === null')
            }
        </section>
        <form className="chating-input">
        <input 
        onChange={e => onChangeCallback(e)}
        onKeyUp={chatingSencerFn(ment, inputSwitch, setInputSwitch)}
        value={ment} 
        name="ment" 
        id="chating" 
        type="text" 
        />
        <button type="submit" onClick={e => {
            e.preventDefault();
                dispatch({ 
                    type: "CREATE_MESSAGE", 
                    payload: { id, message: ment, setTalk } });
                    setInputSwitch(!inputSwitch);
        }}>
            { inputSwitch ? 
            <i className="fas fa-arrow-up"></i>
         : null }
        </button>
        </form>
    </div>
}

export default React.memo(ChatingRoom);