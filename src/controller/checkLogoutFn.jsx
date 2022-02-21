const checkLogoutFn = function(history) {
    if (window.location.pathname === '/clean-chat/') {
        history.push('/friends');
    }
};

export default checkLogoutFn