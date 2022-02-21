import chatAlarm from "./chatAlarmFn";

const chatAlarmSencer = function(messageData, dispatch) {
    if (localStorage.length > 1) {
        const pathLen = window.location.pathname.split('/').length;
        if (pathLen < 5) {
            chatAlarm(messageData, dispatch);
        }
      }
}
export default chatAlarmSencer