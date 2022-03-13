const chatAlarm = function (messageData, dispatch) {
    if (messageData) {
        dispatch({ type: "SWITCH_ALARM" });
        console.log("알람 ON");
        const alarmTimer = setTimeout(() => {
            dispatch({ type: "SWITCH_ALARM" });
            dispatch({ type: "ALARM_MESSAGE", payload: null });
            console.log("알람 OFF");
        }, 2000);
    } else {
        return console.log("메시지 없음");
    }
};

export default chatAlarm;
