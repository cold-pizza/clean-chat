import './style.scss';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';

import friendsAddFn from '../../controller/friendsAddFn';
import friendsSearchFn from '../../controller/friendsSearchFn';
import inputOnChange from '../../controller/inputOnChange';

function SearchUser(props) {
    // 리스트 지정.
    const listRef = useRef(null);

    // 리스트 온오프 스위치.
    const [listRefSwitch, setListRefSwitch] = useState(false);
    
    const [searchList, setSearchList] = useState(null);

    // 친구추가 모달 스위치.
    const [plusModalSwitch, setPlusModalSwitch] = useState(false);
    
    // 검색한 이메일.
    const [searchInput, setSearchInput] = useState({ userSearch:'' });
    const { userSearch } = searchInput;

  useEffect(()=> {
      if (searchList !== null) {
          if (listRefSwitch === false) {
              setListRefSwitch(!listRefSwitch);
            }
      }
  }, [searchList])


    return <div className="search-email">
        <div className="search-form">
        <input 
        onChange={(e) => inputOnChange(e, searchInput, setSearchInput)}
        name="userSearch" 
        type="text" 
        placeholder="번호(id)를 입력해주세요" 
        />
        <i onClick={() => {
            friendsSearchFn(userSearch, setSearchList);
        }} className="fas fa-check cancel-btn"></i>
        </div>
        <section ref={listRef} className="item-list">
            {
                listRefSwitch ? 
                <li className="item">
                <div className="meta-data">
                <img 
                src={searchList.imagePath !== '' ? axios.defaults.baseURL + searchList.imagePath : props.basicImg} 
                alt={searchList.imagePath !== '' ? axios.defaults.baseURL + searchList.imagePath : props.basicImg} />
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
            <i onClick={() => {
                friendsAddFn(searchList.id);
                setPlusModalSwitch(!plusModalSwitch);
            }} className="fas fa-check"></i>
            <i onClick={() => {
                   setPlusModalSwitch(!plusModalSwitch);
               }} className="fas fa-times"></i>
            </div>
        </section> : null
        }
       
    </div>
}

export default SearchUser;