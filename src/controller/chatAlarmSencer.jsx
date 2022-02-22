import chatAlarm from "./chatAlarmFn";

const chatAlarmSencer = function(messageData, dispatch) {
        const pathLen = window.location.pathname.split('/').includes('chatingroom');
        if (!pathLen) chatAlarm(messageData, dispatch);
}
export default chatAlarmSencer