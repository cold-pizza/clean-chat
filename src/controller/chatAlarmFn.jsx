

const chatAlarm = function(message, dispatch) {
    if (message !== null) {
        dispatch({type: "SWITCH_ALARM"});
        console.log('알람 ON');
        setTimeout(() => {
            dispatch({type: "SWITCH_ALARM"});
            console.log('알람 OFF');
        }, 2000)
    } else {
        return console.log('메시지 없음')
    }
}

export default chatAlarm