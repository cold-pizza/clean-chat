const searchImageFn = function (user, chatingRoom, basicImg) {
    let arr = [];
    for (let i = 0; i < user.length; i++) {
        for (let j = 0; j < chatingRoom.length; j++) {
            if (user[i].id === chatingRoom[j].chatUsers[0].id) {
                const ary = localStorage.getItem(
                    `chatImage_${chatingRoom[j].chatUsers[0].name}`
                );
                arr = [...arr, ary];
            } else {
                arr = [...arr, basicImg];
            }
        }
    }
    // console.log(arr);
    return arr;
};

export default searchImageFn;
