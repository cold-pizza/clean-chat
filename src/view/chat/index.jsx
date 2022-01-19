import { useEffect, useState } from 'react/cjs/react.development';
import './style.scss';

import chatRoomRemoveFn from '../../controller/chatRoomRemoveFn';

function Chat(props) {
    useEffect(() => {
        props.setChatingRoom(JSON.parse(localStorage.getItem('chatingRoom')));
    }, [])

    const [chatRemoveSwitch, setChatRemoveSwitch] = useState(false);

    const [removeNum, setRemoveNum] = useState(null);

    return <div className="chat">
        {
            props.chatingRoom !== null ?
            props.chatingRoom.map(({ id, chatUsers })=>{
                return <li>
            <div onClick={()=>{
            props.history.push(`/chatingroom/${id-1}`);
        }} className="meta-data">
                <img src={props.basicImg} alt={props.basicImg} />
                <div>
                    <p>{chatUsers[0].name}</p>
                    <span>null</span>
                </div>
            </div>
            <i onClick={() => {
                setChatRemoveSwitch(!chatRemoveSwitch);
                setRemoveNum(id-1);
            }} className="fas fa-minus minus"></i>
        </li>
            }) : <p className="no-chat-modal">채팅방이 없습니다.</p>
        }
        {
            chatRemoveSwitch ? <div className="chat-remove-modal">
                <p className="chat-title">채팅방 이름</p>
                <p>나가시겠습니까?</p>
                <div className="btns">
                    <button onClick={() => {
                        chatRoomRemoveFn(removeNum);
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


export default Chat;