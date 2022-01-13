import { setIdInput, idInput } from '../model/loginInput';

    // 로그인 input.value
    const accountOnChange = function(e) {
        setIdInput({ ...idInput, [e.target.name]: e.target.value });
      }

// export ../view/friendsModal
export default accountOnChange