import { useSelector } from 'react-redux';
import './style.scss';
import alarmNameFn from '../../controller/alarmNameFn';

const ChatingAlarm = function(props) {
    const basicImg = useSelector(state => state.basicReducer.basicImg);
    const messageData = useSelector(state => state.stateReducer.message);
    const chatingRoom = useSelector(state => state.stateReducer.chatingRoom);
    return <div className="chat-modal">
        <p className="msg-alarm">메시지가 도착했습니다.</p>
        <div className="chat-box">
            <img src={basicImg} alt={basicImg} />
            <div className="chat-info">
            <p>{alarmNameFn(chatingRoom, Number(messageData.chatId))}</p>
            <p>{messageData !== null ? messageData.message : "메시지 없음"}</p>
            </div>
        </div>
    </div>
}

export default ChatingAlarm;