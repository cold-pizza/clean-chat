

const alarmNameFn = function(chatingRoom) {
    let arr = [...chatingRoom];
    const message = JSON.parse(localStorage.getItem("message"));
    arr = arr.filter(arr => {
        return arr.id !== message.chatId ? arr.chatUsers[0].name : null 
    })
    
    return console.log(arr);
}

export default alarmNameFn