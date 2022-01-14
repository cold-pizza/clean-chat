
// 기본 이미지 설정 함수.
const basicImgChangeFn = function(myAccount, setMyAccount, basicImg) {
    if (myAccount.imagePath !== basicImg) {
        const arr = { ...myAccount };
        arr.imagePath = basicImg;
        setMyAccount(arr);
    }
    }

export default basicImgChangeFn