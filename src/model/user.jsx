import { useState } from "react";


 // 친구 계정.
// eslint-disable-next-line react-hooks/rules-of-hooks
export const [user, setUser] = useState([{
    id: 0,
    name: '김재우',
    img: 'https://cold-pizza.github.io/clean-chat/images/1.jpg',
    email: '',
    active: false,
  }, {
    id: 1,
    name: '강유진',
    img: 'https://cold-pizza.github.io/clean-chat/images/2.jpg', 
    email: '',
    active: false,
  }, {
    id: 2,
    name: '강현수',
    img: 'https://cold-pizza.github.io/clean-chat/images/3.jpg',
    email: '',
    active: false,
  }]);