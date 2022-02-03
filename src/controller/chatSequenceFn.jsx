

const chatSequeanceFn = function(arr, id) {
    let j = 0;
    let chatArr = [];
    // 2차원 배열 ⬇️
    let chatArr2 = [];    
    // for -> 순서대로 계속 돌리기.
    // id가 다를때까지 arr2에 계속 추가.
    // 만약 첫번째가 내 채팅이라면 짝수는 내꺼. arr2가 arr3의 짝수 번째에 들어가니까.
    // id값이 달라지면 모아뒀던 arr2를 arr3[j]에 삽입.
    // arr2 초기화.
    
    // while (arr[i].User.id !== id) {
    //     arr2 = [ ...arr2, arr[i] ];
    //     i++;
    // }
    for (let i = 0; i < arr.length; i++) {
        // 내가 먼저 채팅을 시작했을 때
        if (arr[0].User.id === id) {
            while (arr[i].User.id === id) {
                chatArr = [ ...chatArr, arr[i] ];
            }
            chatArr2[j] = chatArr;
        } else {
            while (arr[i].User.id !== id) {
                chatArr = [ ...chatArr, arr[i] ];
            }
            chatArr2[j] = chatArr;
        }
    }
    console.log(chatArr);
}

export default chatSequeanceFn