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


const SWITCH_ALARM = "SWITCH_ALARM";
const SWITCH_CHATING_BUBBLE = "SWITCH_CHATING_BUBBLE";
const SWITCH_SETTING = "SWITCH_SETTING";
const SWITCH_BASIC_MODAL = "SWITCH_BASIC_MODAL";
const SWITCH_IMG_SELECTION = "SWITCH_IMG_SELECTION";
const SWITCH_NAME_INPUT = "SWITCH_NAME_INPUT";
const SWITCH_MY_EDIT = "SWITCH_MY_EDIT";


const reducer = function(state = initialState, action) {
    switch (action.type) {
        case SWITCH_ALARM:
            return { ...state, alarm: !state.alarm };

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


const store = createStore(reducer);

export default store;