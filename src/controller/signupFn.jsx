import axios from 'axios';

  // 회원가입 함수.
  const signupFn = function(joinAccount, setJoinAccount, history) {
    const { name, id, password, psCheck, gender } = joinAccount;
    if (name === '' || id === '' || password === '') {
      alert('이름, 이메일 또는 비밀번호를 입력해주세요.')
      return false;
    }
    const spe = password.search(/[!@#$%^&*]/gi);
    const num = password.search(/[0-9]/g);
    const eng = password.search(/[a-z]/ig);
    if (joinAccount.password.length < 7 || joinAccount.password.length > 20) {
      alert('비밀번호를 6자리 ~ 20자리 이내로 입력해주세요.');
      return false;
    } else if ((spe < 0 && num < 0) || (spe < 0 && eng < 0) || (num < 0 && eng < 0)) {
      alert('영문, 숫자, 특수문자 중 2가지 이상 혼합하여 입력해주세요.');
      return false;
    }
    if (password !== psCheck) {
      alert('비밀번호가 일치하지 않습니다.');
    } else {
      axios.get(`/api/users/email/${id}`)
      .then(() => {
        alert('중복된 이메일입니다.');
      })
      .catch(() => {
        axios.post(`/api/users`, {name, email: id, password, gender }, { withCredentials: true })
        .then((res)=>{
          console.log('회원가입 성공.\n' + res);
          setJoinAccount({ name:'', id: '', password: '' });
          history.push('/');
        })
        .catch((error)=>{
          console.log(error + "\n회원가입 에러");
        })
      })
    }
  }

  export default signupFn