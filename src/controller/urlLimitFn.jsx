const urlLimitFn = function(myAccount, history) {
    const path = window.location.pathname;
    // console.log(path)
    const url = ["/clean-chat", "/clean-chat/", "/clean-chat/signup"];
    if (myAccount === null) {
      if (path !== url[0 || 1]) {
          history.replace('/');
          alert('로그인시 이용 가능합니다.');
        }
    }
  }

  export default urlLimitFn