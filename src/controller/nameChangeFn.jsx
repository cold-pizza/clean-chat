import axios from "axios";

  // 클릭시 이름 변경하는 함수.
  const nameChangeFn = function(myAccount, setMyAccount, nickNameEdit) {
    // 입력받은거 myAccount.name에 붙여넣기
    const data = {
      name: nickNameEdit.names
    }
    axios.patch('https://clean-chat.kumas.dev/api/users', data)
    .then(res => {
      console.log(res.data.message);
      const arr = { ...myAccount };
      arr.name = nickNameEdit.names;
      localStorage.setItem('myInfo', JSON.stringify(arr));
      setMyAccount(arr);
    })
    .catch(err => {
      console.log(err);
    })
  }

export default nameChangeFn