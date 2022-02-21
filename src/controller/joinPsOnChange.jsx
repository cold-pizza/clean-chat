
const joinPsOnChange = function(e, joinAccount, setJoinAccount) {
    setJoinAccount({ ...joinAccount, [e.target.name]: e.target.value });
  }

export default joinPsOnChange