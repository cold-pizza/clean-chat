
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './style.scss';

import createMsgFn from '../../controller/createMsgFn';
import msgSearchFn from '../../controller/msgSearchFn';
import myChatClassifyFn from '../../controller/chatClassifyFn';
import otherChatClassifyFn from '../../controller/otherChatClassifyFn';

function ChatingRoom(props) {
    const { id } = useParams();
    const [otherChat, setOtherChat] = useState(null);

    useEffect(() => {
        props.setChatingRoom(JSON.parse(localStorage.getItem('chatingRoom')));
        const chatContents = JSON.parse(localStorage.getItem(`chatContents_${id}`));
        setOtherChat(chatContents);
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
                otherChat !== null ? 
                otherChatClassifyFn(otherChat, props.myAccount).map(({ content, User }) => {
                    return <div className="you">
                    <img src={props.basicImg} alt={props.basicImg} />
                            <div className="meta-info">
                    <div className="info">
                    <p>{User.name}</p>
                    <span className="comments">{content}</span>
                    </div>
                    </div>
                    <p className="times"></p>
                    </div>
                }) : null}
                    
            {
                otherChat !== null ?
                myChatClassifyFn(otherChat, props.myAccount).map(({ content })=>{
                       return <div className="me">
                           {
                               content !== null ? 
                               <div>
                               <p className="comment">{content}</p>
                               <p className="time"></p>
                               </div>
                                : null
                            }
                        </div>
                    
                }) : null
            }
            
        </section>
        <div className="chating-input">
        <input 
        onChange={chatingOnChange} 
        // onKeyDown={onKeyDownCreateChat(props.chatingRoom[id].id)} 
        value={ment} 
        name="ment" 
        id="chating" 
        type="text" 
        />
        <button>
            <i 
            onClick={()=>{
            createMsgFn(
                props.myChatingRoom[id].id, 
                ment, 
                setTalk, 
                props.myChatComments, 
                props.setMyChatComments
                );
        }} className="fas fa-arrow-up"></i>
        </button>
        </div>
    </div>
}

export default React.memo(ChatingRoom);