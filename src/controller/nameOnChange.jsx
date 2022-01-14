
  // 변경할 이름 input.value 받아오는 함수.
  const nameOnChange = function(e, nickNameEdit, setNickNameEdit) {
    setNickNameEdit({ ...nickNameEdit, [e.target.name]: e.target.value })
  }

export default nameOnChange