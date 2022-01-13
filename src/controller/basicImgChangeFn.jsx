import { myAccount, setMyAccount } from '../model/myAccount';
import { basicImg } from '../model/basicImg';


// 기본 이미지 설정 함수.
const basicImgChangeFn = function() {
    if (myAccount.imagePath !== basicImg) {
        const arr = { ...myAccount };
        arr.imagePath = basicImg;
        setMyAccount(arr);
    }
    }

export default basicImgChangeFn