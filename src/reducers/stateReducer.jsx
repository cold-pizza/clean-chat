import axios from "axios";
import chatRoomRemoveFn from "../controller/chatRoomRemoveFn";

const stateManagement = {
    users: null,
    myAccount: null,
    chatingRoom: null,
    message: null,
    chatContents: [],
  }

  // stateReducer
const GET_MESSAGE = "GET_MESSAGE";
const CREATE_MESSAGE = "CREATE_MESSAGE";
const SEND_MESSAGE = "SEND_MESSAGE";
const REMOVE_CHATINGROOM = "REMOVE_CHATINGROOM";
const CALL_USERS = "CALL_USERS";
const ALARM_MESSAGE = "ALARM_MESSAGE";
const SET_USERS = "SET_USERS";
const SET_MY_ACCOUNT = "SET_MY_ACCOUNT";
const SET_CHATINGROOM = "SET_CHATINGROOM";


const stateReducer = function(state = stateManagement, action) {
    switch(action.type) {

          case GET_MESSAGE:
                let arr = { ...state };
                arr.chatContents = JSON.parse(localStorage.getItem(`chatContents_${action.payload.id}`)); 
                return arr;


          case CREATE_MESSAGE:
            const setTalk = action.payload.setTalk;
            let array = { ...state };
            const data = {
              message: action.payload.message
            }
            axios.post(`${axios.defaults.baseURL}/api/chats/${action.payload.id}/messages`, data)
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
                  return array;


          case SEND_MESSAGE:
            let sendedMessage = { ...state };
            const messageData = action.payload.data;
            const beforeMessage = sendedMessage.chatContents[sendedMessage.chatContents.length-1];
            if (beforeMessage.message !== undefined) {
              if (messageData.message === beforeMessage.message) {
                return sendedMessage;
              } else {
                sendedMessage.chatContents = [ ...sendedMessage.chatContents, action.payload.data ];
              }
            } else {
              sendedMessage.chatContents = [ ...sendedMessage.chatContents, action.payload.data ];
            }
              return sendedMessage;



            case REMOVE_CHATINGROOM:
              return chatRoomRemoveFn(action.payload.id);


              case CALL_USERS:
                let users = { ...state };
              axios.get(`${axios.defaults.baseURL}/api/friends`)
              .then(res => {
                console.log("친구가 " + res.data.message);
                console.log(res.data.result);
                localStorage.setItem('user', JSON.stringify(res.data.result));
                users.user = res.data.result;
                return users;
              })
              .catch(err => {
                console.log('친구 에러');
                console.log(err);
              });
              return users;

              case ALARM_MESSAGE:
                return { ...state, message: action.payload.data };

              case SET_USERS:
                return { ...state, user: action.payload };

              case SET_MY_ACCOUNT:
                return { ...state, myAccount: action.payload };

              case SET_CHATINGROOM:
                return { ...state, chatingRoom: action.payload };
  
  default:
    return state;
}
}

export default stateReducer