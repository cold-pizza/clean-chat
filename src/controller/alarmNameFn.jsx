
const alarmNameFn = function(chatingRoom, id) {
    let arr = [...chatingRoom];
    arr = arr.filter(list => list.id === id);
    return arr[0].chatUsers[0].name;
}

export default alarmNameFn