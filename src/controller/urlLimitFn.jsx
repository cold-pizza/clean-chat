const urlLimitFn = function(history) {
    const path = window.location.pathname;
      const urlCheck = path.split('/');
      if (urlCheck.length >= 3) {
        if (urlCheck[2].length > 0) {
          history.replace('/');
          alert('로그인시 이용 가능합니다.');
        }
        } else { 
          console.log('통과');
        }
  }

export default urlLimitFn