import './style.scss';
import React, { useState, useEffect, useRef } from 'react';

import friendsAddFn from '../../controller/friendsAddFn';
import friendsSearchFn from '../../controller/friendsSearchFn';
import imageOutputFn from '../../controller/imageOutputFn';
import onChange from '../../controller/onChange';
import { useSelector } from 'react-redux';

function SearchUser() {
    const listRef = useRef(null);
    const basicImg = useSelector(state => state.basicReducer.basicImg);
    const users = useSelector(state => state.stateReducer.users);
    const [searchList, setSearchList] = useState(null);
    const [listRefSwitch, setListRefSwitch] = useState(false);
    const [userOverlap, setUserOverlap] = useState(false);
    const [plusModalSwitch, setPlusModalSwitch] = useState(false);
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
        <form className="search-form" onSubmit="return false;">
        <input 
        onChange={e => onChange(e, searchInput, setSearchInput)}
        name="userSearch" 
        type="text" 
        placeholder="이메일(email)을 입력해주세요" 
        />
        <button onClick={e => {
            e.preventDefault();
            friendsSearchFn(userSearch, setSearchList, users, userOverlap, setUserOverlap);
        }} type="submit">
        <i className="fas fa-check cancel-btn"></i>
        </button>
        </form>
        <section ref={listRef} className="item-list">
            {
                listRefSwitch ? 
                <li className="item">
                <div className="meta-data">
                <img 
                src={searchList.imagePath.length > 5 ? imageOutputFn(searchList.imagePath) : basicImg} 
                alt={searchList.imagePath.length > 5 ? imageOutputFn(searchList.imagePath) : basicImg} />
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