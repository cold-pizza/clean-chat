import { useSelector } from 'react-redux';
import './style.scss';
import alarmNameFn from '../../controller/alarmNameFn';

const ChatingAlarm = function(props) {
    console.log(props.chatingRoom)
    const basicImg = useSelector(state => state.stateReducer.basicImg);
    return <div className="chat-modal">
        <p className="msg-alarm">메시지가 도착했습니다.</p>
        <div className="chat-box">
            <img src={basicImg} alt={basicImg} />
            <div className="chat-info">
            <p>{alarmNameFn(props.chatingRoom)}</p>
            <p>{props.message !== null ? props.message[0].message : "메시지 없음"}</p>
            </div>
        </div>
    </div>
}

export default ChatingAlarm;