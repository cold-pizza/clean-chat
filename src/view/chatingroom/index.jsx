
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './style.scss';

import chatMsgSearchFn from '../../controller/chatMsgSearchFn';
import onKeyDownCreateChat from '../../controller/onKeyDownCreateChatFn';
import createChatContent from '../../controller/createChatContentFn';


function ChatingRoom(props) {


    const { id } = useParams();

    useEffect(() => {
        chatMsgSearchFn(props.chatingRoom[id].id);
        const chatContent = JSON.parse(localStorage.getItem('chatContents'));
        setChatComments(chatContent);
    }, [])


    // 나의 채팅 내용.
    const [chatComments, setChatComments] = useState(null);

    // input 이벤트 내용.
    const [talk, setTalk] = useState({ ment: '' });
    const { ment } = talk;

    const chatingOnChange = function(e) {
        setTalk({...talk, [e.target.name]: e.target.value})
    }

    const userName = props.chatingRoom[id].chatUsers[0].name;

    return <div className="chating-room">
        <nav>
        <i onClick={()=>{
            props.history.goBack();
        }} className="fas fa-chevron-left"></i>
        <p className="name">{userName}</p>
        <div></div>
        </nav>
        <section className="chating-form">
            <div className="you">
                <img src={props.basicImg} alt={props.basicImg} />
                <div className="meta-info">
                    <div className="info">
                        <p>{userName}</p>
                        <span className="comments">안녕하세요~</span>
                    </div>
                </div>
                    <p className="times"></p>
            </div>
            {
                chatComments ?
                chatComments.map(({ ment })=>{
                       return <div className="me">
                           {
                               ment !== '' ? 
                               <div>
                               <p className="comment">{ment}</p>
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
        onKeyDown={onKeyDownCreateChat(props.chatingRoom[id].id)} 
        value={ment} 
        name="ment" 
        id="chating" 
        type="text" 
        />
        <button>
            <i 
            onClick={()=>{
            createChatContent(props.chatingRoom[id].id, ment);
        }} className="fas fa-arrow-up"></i>
        </button>
        </div>
    </div>
}

export default React.memo(ChatingRoom);