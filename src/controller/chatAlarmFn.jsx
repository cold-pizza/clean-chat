

const chatAlarm = function(message, dispatch) {
    if (message !== null) {
        dispatch({type: "SWITCH_ALARM"});
        setTimeout(() => {
            dispatch({type: "SWITCH_ALARM"});
        }, 2000)
    } else {
        return console.log('메시지 없음')
    }
}

export default chatAlarm