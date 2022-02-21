const urlLimitFn = function(myAccount, history) {
    const path = window.location.pathname;
    if (myAccount === null) {
      const urlCheck = path.split('/');
      if (urlCheck.length >= 3) {
        if (urlCheck[2].length > 0) {
          history.replace('/');
          alert('로그인시 이용 가능합니다.');
        }
        } else { 
          console.log('통과');
        }
    } else {
      if (window.location.pathname === '/clean-chat/') {
        import('./logoutFn')
        .then(({ default: logout }) => {
          logout(history);
        });
      }
    }
  }

export default urlLimitFn