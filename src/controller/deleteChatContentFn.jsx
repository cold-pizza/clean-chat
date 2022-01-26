import axios from "axios";

const deleteChatContentFn = function(chatId, msgId) {
    axios.delete(`${axios.defaults.baseURL}/api/chats/${chatId}/messages/${msgId}`)
    .then(res => {
      console.log(res.data.message+ '\n' + res);
    })
    .catch(err => console.log(err));
  }

  export default deleteChatContentFn