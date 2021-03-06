const basicState = {
    basicImg: "https://cold-pizza.github.io/clean-chat/images/basicProfile.jpg",
    site: [
        {
            id: 0,
            site: "/friends",
            logo: "fas fa-user",
        },
        {
            id: 1,
            site: "/chat",
            logo: "fas fa-comment",
        },
        {
            id: 2,
            site: "/setting",
            logo: "fas fa-cog",
        },
    ],
    navSite: [
        {
            id: 0,
            site: "/friends",
            title: "친구",
        },
        {
            id: 1,
            site: "/chat",
            title: "채팅",
        },
        {
            id: 2,
            site: "/setting/searchuser",
            title: "유저검색",
        },
        {
            id: 3,
            site: "/search",
            title: "친구찾기",
        },
        {
            id: 4,
            site: "/setting/friendsremove",
            title: "친구관리",
        },
    ],
};

const basicReducer = function (state = basicState, action) {
    return state;
};

export default basicReducer;
