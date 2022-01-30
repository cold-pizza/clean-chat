

const chatAlarm = function(chatAlarmSwitch, setChatAlarmSwitch) {
    // 채팅방에 안 들어와있을 때 -> 소켓비접속시.
    if (false) {
        // 알림 스위치 true.
        // setTimeout 실행. -> 2초
        // return false

        // 스위치2 true.
        // 말풍선 빨간불 생성.
        // 채팅창 들어가면 스위치 false로 변경.
        // + 숫자 초기화.
    }
    // 채팅 알림창 띄우기
    setChatAlarmSwitch(!chatAlarmSwitch);

    if(chatAlarmSwitch) {
        setTimeout(() => {
            setChatAlarmSwitch(!chatAlarmSwitch);
        }, 2000)
    }
}

export default chatAlarm