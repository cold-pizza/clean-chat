import axios from "axios";

  // 클릭시 이름 변경하는 함수.
  const nameChangeFn = function(myAccount, nickNameEdit, dispatch) {
    // 입력받은거 myAccount.name에 붙여넣기
    const data = {
      name: nickNameEdit.names
    }
    axios.patch(`/api/users`, data)
    .then(res => {
      console.log(res.data.message);
      const arr = { ...myAccount };
      arr.name = nickNameEdit.names;
      localStorage.setItem('myInfo', JSON.stringify(arr));
      dispatch({ type: "SET_MY_ACCOUNT", payload: JSON.parse(localStorage.getItem('myInfo')) });
    })
    .catch(err => {
      console.log(err);
    }) 
  }

export default nameChangeFn