

const chatAlarm = function(setState, dispatch) {
    if (localStorage.message !== undefined) {
        setState([JSON.parse(localStorage.getItem("message"))]);
        dispatch({type: "SWITCH_ALARM"});
        setTimeout(() => {
            dispatch({type: "SWITCH_ALARM"});
        }, 2000)
    } else {
        console.log('메시지 없음');
    }
}

export default chatAlarm