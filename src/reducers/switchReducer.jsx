const switchState = {
    alarm: false,
    chatBubble: false,
    settingSwitch: false,
    basicModalSwitch: false,
    selectImgSwitch: false,
    nameInputSwitch: false,
    myEditSwitch: false,
    chatRemoveSwitch: false,
    profileImageEditSwitch: false,
    buttonActiveSwitch: false,
};

const SWITCH_ALARM = "SWITCH_ALARM";
const SWITCH_CHATING_BUBBLE = "SWITCH_CHATING_BUBBLE";
const SWITCH_SETTING = "SWITCH_SETTING";
const SWITCH_BASIC_MODAL = "SWITCH_BASIC_MODAL";
const SWITCH_IMG_SELECTION = "SWITCH_IMG_SELECTION";
const SWITCH_NAME_INPUT = "SWITCH_NAME_INPUT";
const SWITCH_MY_EDIT = "SWITCH_MY_EDIT";
const SWITCH_CHAT_REMOVE = "SWITCH_CHAT_REMOVE";
const SWITCH_PROFILE_IMAGE_EDIT = "SWITCH_PROFILE_IMAGE_EDIT";
const SWITCH_BUTTON_ACTIVE = "SWITCH_BUTTON_ACTIVE";

const switchReducer = function (state = switchState, action) {
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

        case SWITCH_CHAT_REMOVE:
            return { ...state, chatRemoveSwitch: !state.chatRemoveSwitch };

        case SWITCH_PROFILE_IMAGE_EDIT:
            return {
                ...state,
                profileImageEditSwitch: !state.profileImageEditSwitch,
            };

        case SWITCH_BUTTON_ACTIVE:
            return { ...state, buttonActiveSwitch: !state.buttonActiveSwitch };

        default:
            return state;
    }
};

export default switchReducer;
