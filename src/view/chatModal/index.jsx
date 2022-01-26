import './style.scss';

const ChatModal = function(props) {
    return <div className="chat-modal">
        <p className="msg-alarm">메시지가 도착했습니다.</p>
        <div className="chat-box">
            <img src={props.basicImg} alt="#" />
            <p>채팅내용</p>
        </div>
    </div>
}

export default ChatModal;