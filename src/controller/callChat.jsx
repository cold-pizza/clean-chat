import axios from 'axios';
const callChat = async function(dispatch) {
    const chatingRoom = await axios.get(`/api/chats`);
            const cr = chatingRoom.data.result;
            dispatch({ type: "SET_CHATINGROOM", payload: cr }); 
  }

  export default callChat