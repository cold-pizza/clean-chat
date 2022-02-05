


const userOverlapCheckFn = function(friends, searchList, state, setState) {
    // searchList.id와 내 친구에 id가 같은것이 있다면 userOverlap = true 출력.
    console.log(friends);
    for (let i = 0; i < friends.length; i++) {
        if (searchList.id === friends[i].id) {
            setState(!state);
        }
    }
    return console.log("변경되었습니다.")
}

export default userOverlapCheckFn