import { useState } from "react";

 // 회원가입 state & onChange.
 // eslint-disable-next-line react-hooks/rules-of-hooks
export const [joinAccount, setJoinAccount] = useState({ name: '', id: '', password: '', psCheck: '', gender: '', imagePath: '' });