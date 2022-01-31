
const joinPsOnChange = function(e, joinAccount, setJoinAccount, state, setState) {
    setJoinAccount({ ...joinAccount, [e.target.name]: e.target.value });
    // 나중에 다시 설정.
    // console.log(joinAccount.password)
    // console.log(joinAccount.psCheck)
    // if (joinAccount.password === joinAccount.psCheck) {
    //     if (joinAccount.name.length >= 2) {
    //         setState(!state);
    //     }
    // } else {
    //     if (state === false) {
    //         setState(!state);
    //     }
    // }
  }

export default joinPsOnChange