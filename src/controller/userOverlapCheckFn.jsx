const userOverlapCheckFn = function(friends, searchList, state, setState) {
    console.log(friends);
    for (let i = 0; i < friends.length; i++) {
        if (searchList.id === friends[i].id) {
            setState(!state);
        }
    }
    return console.log("변경되었습니다.");
}

export default userOverlapCheckFn