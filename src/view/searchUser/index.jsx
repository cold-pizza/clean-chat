import './style.scss';
import React, { useState, useEffect, useRef } from 'react';

import friendsAddFn from '../../controller/friendsAddFn';
import friendsSearchFn from '../../controller/friendsSearchFn';
import imageOutputFn from '../../controller/imageOutputFn';
import onChange from '../../controller/onChange';
import { useSelector } from 'react-redux';

function SearchUser() {
    // 리스트 지정.
    const listRef = useRef(null);
    // const basicImg = useSelector(state => state.basicReducer.basicImg);
    const users = useSelector(state => state.stateReducer.users);
    const [searchList, setSearchList] = useState(null);
    const [listRefSwitch, setListRefSwitch] = useState(false);
    const [userOverlap, setUserOverlap] = useState(false);
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
      return console.log('load');
  }, [listRefSwitch, searchList]);

    return <div className="search-email">
        <div className="search-form">
        <input 
        onChange={e => onChange(e, searchInput, setSearchInput)}
        name="userSearch" 
        type="text" 
        placeholder="이메일(email)을 입력해주세요" 
        />
        <i onClick={() => {
            friendsSearchFn(userSearch, setSearchList, users, userOverlap, setUserOverlap);
        }} className="fas fa-check cancel-btn"></i>
        </div>
        <section ref={listRef} className="item-list">
            {
                listRefSwitch ? 
                <li className="item">
                <div className="meta-data">
                <img 
                src={imageOutputFn(searchList.imagePath)} 
                alt={imageOutputFn(searchList.imagePath)} />
                {
                    searchList !== null ? <p>{searchList.name}</p> : null
                }
                </div>
                {
                    userOverlap ? <p style={{ color: "gray" }}>이미 친구입니다!</p> :
               <i onClick={() => {
                   setPlusModalSwitch(!plusModalSwitch);
                }} className="fas fa-plus"></i>
            }
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

export default React.memo(SearchUser);