import axios from 'axios';
import { combineReducers, createStore } from 'redux';

import msgSearchFn from './controller/msgSearchFn';

const switchState = {
    alarm: false,
    chatBubble: false,
    settingSwitch: false,
    basicModalSwitch: false,
    selectImgSwitch: false,
    nameInputSwitch: false,
    myEditSwitch: false,
    test: null,
}

const stateManagement = {
  message: null,
  chatContents: [],
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

// stateReducer
const GET_MESSAGE = "GET_MESSAGE";
const CREATE_MESSAGE = "CREATE_MESSAGE";
const CHECK_CHAT = "CHECK_CHAT";
const SEND_MESSAGE = "SEND_MESSAGE";


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
              let array = { ...state };
              const data = {
                message: action.payload.message
              }
              axios.post(`${axios.defaults.baseURL}/api/chats/${action.payload.id}/messages`, data)
                    .then(res => {
                        console.log(res.data);
                        array.chatContents = [ ...array.chatContents, res.data.result ];
                        return array;
                    }) 
                    .catch(err => {
                        console.log(err);
                        console.log('메시지 전송 에러');
                    })
                    return array;

            case SEND_MESSAGE:
              let sendedMessage = { ...state };
              sendedMessage.chatContents = [ ...sendedMessage.chatContents, action.payload.data ];
              return sendedMessage;


    // case CHECK_CHAT:
    //   const id = action.payload.id;
    //   const chatingRoom = action.payload.chatingRoom;
    //   const setChatingRoom = action.payload.setChatingRoom;
    //   return msgSearchFn(id, chatingRoom, setChatingRoom);

    
    default:
      return state;
  }
}


const store = createStore(combineReducers({switchReducer, stateReducer}));

export default store;