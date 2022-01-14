
  // 클릭시 이름 변경하는 함수.
  const nameChange = function(myAccount, setMyAccount, nickNameEdit, setNickNameEdit) {
    // 입력받은거 myAccount.name에 붙여넣기
    const arr = { ...myAccount };
    arr.name = nickNameEdit.names;
    setMyAccount(arr);
    // 수정하면 자동으로 로컬스토리지 업데이트.
    setNickNameEdit({ names: '' });
  }

export default nameChange