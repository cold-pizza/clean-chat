import './style.scss';

const ChatingAlarm = function(props) {
    return <div className="chat-modal">
        <p className="msg-alarm">메시지가 도착했습니다.</p>
        <div className="chat-box">
            <img src={props.basicImg} alt="#" />
            <div className="chat-info">
            <p>이름</p>
            <p>채팅내용</p>
            </div>
        </div>
    </div>
}

export default ChatingAlarm;