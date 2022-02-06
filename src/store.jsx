import { createStore } from 'redux';

const initialState = {
    alarm: false,
    chatBubble: false,
    settingSwitch: false,
    basicModalSwitch: false,
    selectImgSwitch: false,
    nameInputSwitch: false,
    myEditSwitch: false,
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

const ALARM_SWITCH = "ALARM_SWITCH";
const CHAT_BUBBLE_SWITCH = "CHAT_BUBBLE_SWITCH";
const SETTING_SWITCH = "SETTING_SWITCH";
const BASIC_MODAL_SWITCH = "BASIC_MODAL_SWITCH";
const SELECT_IMG_SWITCH = "SELECT_IMG_SWITCH";
const NAME_INPUT_SWITCH = "NAME_INPUT_SWITCH";
const MY_EDIT_SWITCH = "MY_EDIT_SWITCH";

const reducer = function(state = initialState, action) {
    switch (action.type) {
        case ALARM_SWITCH:
            return { ...state, alarm: !state.alarm };

        case CHAT_BUBBLE_SWITCH:
            return { ...state, chatBubble: !state.chatBubble };

        case SETTING_SWITCH:
            return { ...state, settingSwitch: !state.settingSwitch };

        case BASIC_MODAL_SWITCH:
            return { ...state, basicModalSwitch: !state.basicModalSwitch };

        case SELECT_IMG_SWITCH:
            return { ...state, selectImgSwitch: !state.selectImgSwitch };
        
        case NAME_INPUT_SWITCH:
            return { ...state, nameInputSwitch: !state.nameInputSwitch };

        case MY_EDIT_SWITCH:
            return { ...state, myEditSwitch: !state.myEditSwitch };

        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;