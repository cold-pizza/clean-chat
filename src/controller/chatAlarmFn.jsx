

const chatAlarm = function(chatAlarmSwitch, setChatAlarmSwitch) {
    // 채팅방에 안 들어와있을 때 -> 소켓비접속시.
    if (true) { // <- 소켓 미접속시(채팅방에 안들어와있을 때)
        // 알림창에 채팅내용 삽입.
        // 알림 스위치 true.
        setChatAlarmSwitch(!chatAlarmSwitch);
        // setTimeout 실행. -> 2초
        setTimeout(() => {
            setChatAlarmSwitch(!chatAlarmSwitch);
        }, 2000);
        // return false

        // 스위치2 true.
        // 채팅기록 불러오기 -> i번째부터 마지막까지 갯수 빨간불에 입력.
        // 말풍선 빨간불 생성.
        // + 숫자 초기화.

        // 스위치3 true.
        // 채팅온 숫자만큼 숫자 생성.
        // i번째 채팅방 빨간불 생성.
        // 채팅방 들어가면 스위치2, 3 false. filter
    }
}

export default chatAlarm