import axios from 'axios';

const getScrollMessage = function(id, dispatch) {
    const num = JSON.parse(localStorage.getItem(`chatContents_${id}`))[0].id;
    axios.get(`/api/chats/${id}/messages?messageId=${num}`)
    .then(res => {
        console.log('스크롤 채팅 불러오기');
        console.log(res.data);
        const contents = res.data.result[0].ChatContents.reverse();
        dispatch({ type: "SCROLL_MESSAGE", payload: contents });
    })
}

export default getScrollMessage