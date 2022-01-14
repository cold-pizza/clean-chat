
    // 로그인 input.value
const accountOnChange = function(e, idInput, setIdInput) {
    setIdInput({ ...idInput, [e.target.name]: e.target.value });
  }

// export ../view/friendsModal
export default accountOnChange