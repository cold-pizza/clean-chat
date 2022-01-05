import '../styles/searchemail.scss';
import axios from 'axios';
import { useState, useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';

function SearchEmail(props) {
    const listRef = useRef(null);
    const [listRefSwitch, setListRefSwitch] = useState(false);
    const [plusModalSwitch, setPlusModalSwitch] = useState(false);
    
    const [searchInput, setSearchInput] = useState({ searchEmail:'' });
    const { searchEmail } = searchInput;

    const inputOnChange = function(e) {
        const { name, value } = e.target;
        setSearchInput({ ...searchInput, [name]: value })
    }
    console.log(searchEmail)
    
      // 친구 검색결과 리스트.
      const [searchList, setSearchList] = useState(null);

  // 친구 추가 요청 함수.
  const userSearchFn = function(id) {
    axios.get(`https://clean-chat.kumas.dev/api/users/${id}`)
    .then(res => {
        const user = res.data.result;
        setSearchList(user);
    })
  }

  useEffect(()=> {
      if (searchList !== null) {
        setListRefSwitch(!listRefSwitch);
      }
  }, [searchList])

    return <div className="search-email">
        <div className="search-form">
        <input 
        onChange={inputOnChange}
        name="searchEmail" 
        value={searchEmail} 
        type="text" 
        placeholder="이메일로 검색해주세요!" 
        />
        <i onClick={() => {
            userSearchFn(Number(searchEmail));
            listRef.current.append()
        }} className="fas fa-check cancel-btn"></i>
        </div>
        <section ref={listRef} className="item-list">
            {
                listRefSwitch ? 
                <li className="item">
                <div className="meta-data">
                <img src={props.basicImg} alt={props.basicImg} />
                {
                    searchList !== null ? <p>{searchList.name}</p> : null
                }
                </div>
               <i onClick={() => {
                   setPlusModalSwitch(!plusModalSwitch);
                }} className="fas fa-plus"></i>
            </li>
            : null
            }
        </section>
        {
            plusModalSwitch === true ? <section className="plus-modal">
            <p>{searchList.name}님을 추가하시겠습니까?</p>
            <div>
            <i className="fas fa-check"></i>
            <i onClick={() => {
                   setPlusModalSwitch(!plusModalSwitch);
               }} className="fas fa-times"></i>
            </div>
        </section> : null
        }
       
    </div>
}

export default SearchEmail;