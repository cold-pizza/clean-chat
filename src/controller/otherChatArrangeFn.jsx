

const otherChatArrangeFn = function(cpyArr, user) {
    let arr = cpyArr.filter((list) => {
        return list.User.id !== user.id;
    })
return arr;
}

export default otherChatArrangeFn