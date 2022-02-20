import chatRoomRemoveFn from "../controller/chatRoomRemoveFn";
import createMessageFn from "../controller/createMessageFn";
import sendMessageFn from "../controller/sendMessageFn";
import callUsersFn from "../controller/callUsersFn";

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
            return { ...state, chatContents: JSON.parse(localStorage.getItem(`chatContents_${action.payload}`))};

          case CREATE_MESSAGE:
            let array = { ...state };
            createMessageFn(action, array);
            return array;

          case SEND_MESSAGE:
            let sendedMessage = { ...state };
            sendMessageFn(sendedMessage, action);
              return sendedMessage;

            case REMOVE_CHATINGROOM:
              return chatRoomRemoveFn(action.payload.id);

              case CALL_USERS:
                let users = { ...state };
                callUsersFn(users);
              return users;

              case ALARM_MESSAGE:
                return { ...state, message: action.payload };

              case SET_USERS:
                return { ...state, users: action.payload };

              case SET_MY_ACCOUNT:
                return { ...state, myAccount: action.payload };

              case SET_CHATINGROOM:
                return { ...state, chatingRoom: action.payload };
  
  default:
    return state;
}
}

export default stateReducer