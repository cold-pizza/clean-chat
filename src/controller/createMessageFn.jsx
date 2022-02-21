import axios from 'axios';
const createMessageFn = function(action, array) {
    const setTalk = action.payload.setTalk;
    const data = {
      message: action.payload.message
    }
    axios.post(`/api/chats/${action.payload.id}/messages`, data)
          .then(res => {
              console.log(res.data);
              array.chatContents = [ ...array.chatContents, res.data.result ];
              setTalk({ ment: '' });
              return array;
          }) 
          .catch(err => {
              console.log(err);
              console.log('메시지 전송 에러');
          })
}

export default createMessageFn