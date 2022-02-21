const checkBaseUrl = function(history) {
    if (window.location.pathname === '/clean-chat/') {
        history.push('/friends');
    }
};

export default checkBaseUrl