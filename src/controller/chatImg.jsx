import axios from "axios";

const chatImg = function(user, chatingRoom, basicImg) {
    // 친구 id랑 채팅방 유저id가 같으면 친구 이미지 불러오기
    for (let i = 0; i < user.length; i++) {
        for(let j = 0; j < chatingRoom.length; j++) {
            if (user[i].id === chatingRoom[j].chatUsers[0].id) {
                return localStorage.setItem(
                    `chatImage_${chatingRoom[j].chatUsers[0].name}`, 
                    axios.defaults.baseURL + user[i].imagePath);
            } else {
                return localStorage.setItem(`chatImage_${chatingRoom[j].chatUsers[0].name}`, basicImg);
            }
        }
    }
}

export default chatImg