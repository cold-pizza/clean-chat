const chatNameFilterFn = function (chatingRoom, id) {
    const arr = [...chatingRoom].filter((list) => {
        return list.id === Number(id);
    });
    return arr[0].chatUsers[0].name;
};

export default chatNameFilterFn;
