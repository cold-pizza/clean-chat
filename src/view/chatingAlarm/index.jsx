import { useSelector } from 'react-redux';
import './style.scss';

const ChatingAlarm = function() {
    const basicImg = useSelector(state => state.basicImg);
    return <div className="chat-modal">
        <p className="msg-alarm">메시지가 도착했습니다.</p>
        <div className="chat-box">
            <img src={basicImg} alt={basicImg} />
            <div className="chat-info">
            <p>이름</p>
            <p>채팅내용</p>
            </div>
        </div>
    </div>
}

export default ChatingAlarm;