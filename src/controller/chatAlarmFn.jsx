

const chatAlarm = function(chatAlarmSwitch, setChatAlarmSwitch) {
    // 채팅방에 안 들어와있을 때 -> 소켓비접속시.
    
    // 채팅 알림창 띄우기
    setChatAlarmSwitch(!chatAlarmSwitch);

    if(chatAlarmSwitch) {
        setTimeout(() => {
            setChatAlarmSwitch(!chatAlarmSwitch);
        }, 2000)
    }
}

export default chatAlarm