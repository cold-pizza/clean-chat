
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import io from 'socket.io-client';
import './style.scss';
import OtherContent from '../../view/otherContent';
import MyContent from '../../view/myContent';

// import createMsgFn from '../../controller/createMsgFn';
import msgSearchFn from '../../controller/msgSearchFn';
// import createMsgFn2 from '../../controller/createMsgFn2';
import socketMsgFn from '../../controller/socketMsgFn';
import { useSelector, useDispatch } from 'react-redux';

function ChatingRoom(props) {
    const dispatch = useDispatch();
    const { id } = useParams();
    const chatContents = useSelector(state => state.stateReducer.chatContents);
    // const [otherChat, setOtherChat] = useState(() => JSON.parse(localStorage.getItem(`chatContents_${id}`)));
    const scrollRef = useRef(null);
    
    // const iterable =  v => v !== null && typeof v[Symbol.iterator] === 'function';
    const chatName = props.chatingRoom[id].chatUsers[0].name;
    useEffect(() => {
        props.setChatingRoom(JSON.parse(localStorage.getItem('chatingRoom')));
        // const chatContents = JSON.parse(localStorage.getItem(`chatContents_${id}`));
        socketMsgFn(io, dispatch);
        // console.log(iterable(otherChat));
        return console.log("로딩");
    }, []);


    useEffect(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        return console.log('정렬');
    }, [chatContents]);

    const [talk, setTalk] = useState({ ment: '' });
    const { ment } = talk;

    const chatingOnChange = function(e) {
        setTalk({...talk, [e.target.name]: e.target.value});
    }
    return <div className="chating-room">
        <nav>
        <i onClick={()=>{
            msgSearchFn(id, props.chatingRoom, props.setChatingRoom);
            // dispatch({ type: "CHECK_CHAT", payload: { id: id, chatingRoom: props.chatingRoom, setChatingRoom: props.setChatingRoom } });
            props.history.goBack();
        }} className="fas fa-chevron-left"></i>
        <p className="name">{props.chatingRoom !== null ? props.chatingRoom[id].chatUsers[0].name : null}</p>
        <div></div>
        </nav>
        <section ref={scrollRef} className="chating-form">
            {
                
                chatContents !== null ? chatContents.map((list, i) => {

                    if (list.User) {
                        if (list.User.id === props.myAccount.id) {
                            return <MyContent key={i} list={list} />
                        } else 
                        return <OtherContent key={i} list={list} chatName={chatName} />
                    } else if (list.UserId) {
                        return <MyContent key={i} list={list} />
                    } else {
                        return <OtherContent key={i} list={list} chatName={chatName} />
                    }
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
                dispatch({ 
                    type: "CREATE_MESSAGE", 
                    payload: { id: props.chatingRoom[id].id, message: ment, setTalk } });
            // createMsgFn2(props.chatingRoom[id].id, ment, otherChat, setOtherChat, setTalk);
        }} className="fas fa-arrow-up"></i>
        </button>
        </div>
    </div>
}

export default React.memo(ChatingRoom);