const chatSequeanceFn = function(arr) {
    let j = 0;
    // 2차배열로 옮길 배열 ⬇️
    let chatArr = [];
    // 2차 배열만들 배열 ⬇️
    let chatArr2 = [];
    // 배열 갯수만큼 순회.
    for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
            if (arr[i].UserId) { // 새로 등록된 채팅이 있을 때 실행
                if (arr[i].UserId !== (arr[i-1].UserId || arr[i-1].User.id)) {  
                    chatArr2[j] = [];
                    chatArr2[j] = chatArr;
                    chatArr = [];
                    j += 1;
                    chatArr = [ ...chatArr, arr[i] ];
                } else {
                    chatArr = [ ...chatArr, arr[i] ];
                }
            } else {
                if (arr[i].User.id !== arr[i-1].User.id) { //지금과 이전것이 다르면 
                    chatArr2[j] = [];                      // 2차 배열생성하고 삽입하기
                    chatArr2[j] = chatArr;
                    chatArr = [];
                    j += 1;
                    chatArr = [ ...chatArr, arr[i] ];
                } else {
                    chatArr = [ ...chatArr, arr[i] ];
                }
            }
            } else {
                chatArr = [ ...chatArr, arr[i] ];
            }
        // 마지막에 삽입된 배열이 2차 배열로 안옮겨져서 추가한 로직.
        if (i === arr.length - 1) {
            chatArr2[j] = [];
            chatArr2[j] = chatArr;
        }
    }
    return chatArr2;
}

export default chatSequeanceFn