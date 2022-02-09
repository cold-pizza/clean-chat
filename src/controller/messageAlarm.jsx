import chatingroom from "../view/chatingroom";


const messageAlarmFn = function(chatingRoom) {
    if (localStorage.message !== null) {
        const message = JSON.parse(localStorage.getItem("message"));
        if (message.id === chatingRoom.id) {
            
        }
    }
}

export default messageAlarmFn