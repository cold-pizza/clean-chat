const chatNameFilterFn = function(chatingRoom, id) {
    const list = [...chatingRoom];
    list.filter(list => list.id === id);
    return list[0].chatUsers[0].name;
}

export default chatNameFilterFn