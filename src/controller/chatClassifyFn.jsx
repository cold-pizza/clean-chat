
const chatClassifyFn = function(arr, myAccount) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i].User.id || arr[i].UserId) === myAccount.id) {
            arr2 = [ ...arr2, arr[i] ];
        }
        console.log(`${i}번째 분리중..`);
    }
    console.log('내 채팅기록 분리 끝');
    return arr2;
}

export default chatClassifyFn