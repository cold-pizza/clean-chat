const checkLogoutFn = function(myAccount, history) {
    if (myAccount !== null && window.location.pathname === '/clean-chat/') {
        import('./logoutFn')
        .then(({ default: logout }) => {
          logout(history);
        });
    }
};

export default checkLogoutFn