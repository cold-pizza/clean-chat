const urlLimitFn = function(history) {
    const path = window.location.pathname;
    const url = ["/clean-chat", "/clean-chat/signup"];
    if (localStorage.user === undefined) {
      if (path !== (url[0] || url[1])) {
          history.replace('/');
          alert('로그인시 이용 가능합니다.');
        }
    }
  }

  export default urlLimitFn