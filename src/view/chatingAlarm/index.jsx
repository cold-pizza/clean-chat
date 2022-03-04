import { useSelector } from "react-redux";
import "./style.scss";
import alarmNameFn from "../../controller/alarmNameFn";

const ChatingAlarm = function () {
    const basicImg = useSelector((state) => state.basicReducer.basicImg);
    const messageData = useSelector((state) => state.stateReducer.message);
    const chatingRoom = useSelector((state) => state.stateReducer.chatingRoom);
    return (
        <div className="chat-modal">
            <p className="msg-alarm">메시지가 도착했습니다.</p>
            <div className="chat-box">
                <img src={basicImg} alt={basicImg} />
                <div className="chat-info">
                    <p>
                        {messageData?.chatId
                            ? alarmNameFn(
                                  chatingRoom,
                                  Number(messageData.chatId)
                              )
                            : null}
                    </p>
                    <p>{messageData ? messageData.message : "메시지 없음"}</p>
                </div>
            </div>
        </div>
    );
};

export default ChatingAlarm;
