import axios from 'axios';
import { combineReducers, createStore } from 'redux';
import chatRoomRemoveFn from './controller/chatRoomRemoveFn';

const switchState = {
    alarm: false,
    chatBubble: false,
    settingSwitch: false,
    basicModalSwitch: false,
    selectImgSwitch: false,
    nameInputSwitch: false,
    myEditSwitch: false,
    chatRemoveSwitch: false,
    test: null,
}

const stateManagement = {
  user: null,
  message: null,
  chatContents: [],
}

const basicState = {
  basicImg: "https://cold-pizza.github.io/clean-chat/images/happy.jpg",
  site: [{
    id: 0,
    site: '/friends',
    logo: 'fas fa-user',
  }, {
    id: 1,
    site: '/chat',
    logo: 'fas fa-comment'
  }, {
    id: 2,
    site: '/search',
    logo: 'fas fa-search'
  }
],
navSite: [{
    id: 0,
    site: '/friends',
    title: '친구'
  },{
    id: 1,
    site: '/chat',
    title: '채팅'
  }, {
    id: 2,
    site: '/searchuser',
    title: '유저검색'
  }, {
    id: 3,
    site: '/search',
    title: '친구찾기'
  }, {
    id: 4,
    site: '/friendsremove',
    title: '친구관리'
  }]
}

// switchReducer
const SWITCH_ALARM = "SWITCH_ALARM";
const SWITCH_CHATING_BUBBLE = "SWITCH_CHATING_BUBBLE";
const SWITCH_SETTING = "SWITCH_SETTING";
const SWITCH_BASIC_MODAL = "SWITCH_BASIC_MODAL";
const SWITCH_IMG_SELECTION = "SWITCH_IMG_SELECTION";
const SWITCH_NAME_INPUT = "SWITCH_NAME_INPUT";
const SWITCH_MY_EDIT = "SWITCH_MY_EDIT";
const SWITCH_CHAT_REMOVE = "SWITCH_CHAT_REMOVE";

// stateReducer
const GET_MESSAGE = "GET_MESSAGE";
const CREATE_MESSAGE = "CREATE_MESSAGE";
const CHECK_CHAT = "CHECK_CHAT";
const SEND_MESSAGE = "SEND_MESSAGE";
const REMOVE_CHATINGROOM = "REMOVE_CHATINGROOM";
const CALL_USERS = "CALL_USERS";
const ALARM_MESSAGE = "ALARM_MESSAGE";


const switchReducer = function(state = switchState, action) {
    switch (action.type) {
        case SWITCH_ALARM:
          let node = { ...state };
          node.test = action.payload;
            // return { ...state, alarm: !state.alarm };
            return node;

        case SWITCH_CHATING_BUBBLE:
            return { ...state, chatBubble: !state.chatBubble };

        case SWITCH_SETTING:
            return { ...state, settingSwitch: !state.settingSwitch };

        case SWITCH_BASIC_MODAL:
            return { ...state, basicModalSwitch: !state.basicModalSwitch };

        case SWITCH_IMG_SELECTION:
            return { ...state, selectImgSwitch: !state.selectImgSwitch };
        
        case SWITCH_NAME_INPUT:
            return { ...state, nameInputSwitch: !state.nameInputSwitch };

        case SWITCH_MY_EDIT:
            return { ...state, myEditSwitch: !state.myEditSwitch };

        case SWITCH_CHAT_REMOVE:
            return { ...state, chatRemoveSwitch: !state.chatRemoveSwitch };

        default:
            return state;
    }
}

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
                  return { ...state, message: action.payload.message };




    // case CHECK_CHAT:
    //   const id = action.payload.id;
    //   const chatingRoom = action.payload.chatingRoom;
    //   const setChatingRoom = action.payload.setChatingRoom;
    //   return msgSearchFn(id, chatingRoom, setChatingRoom);



    
    default:
      return state;
  }
}

const basicReducer = function(state = basicState, action) {
  return state;
}


const store = createStore(combineReducers({basicReducer, switchReducer, stateReducer}));

export default store;