import axios from "axios";

const getScrollMessage = function (id, dispatch, chatContents, setNum) {
    const num = chatContents[0].id;
    axios.get(`/api/chats/${id}/messages?messageId=${num}`).then((res) => {
        const contents = res.data.result[0].ChatContents.reverse();
        setNum(contents.length * 57);
        dispatch({ type: "SCROLL_MESSAGE", payload: contents });
    });
};

export default getScrollMessage;
