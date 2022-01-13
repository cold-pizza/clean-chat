import { joinAccount, setJoinAccount } from '../model/joinAccount';

const joinOnChange = function(e) {
    setJoinAccount({ ...joinAccount, [e.target.name]: e.target.value })
  }

export default joinOnChange