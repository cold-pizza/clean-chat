import './style.scss';
import { useState, useRef } from 'react';
import { useEffect } from 'react';

import friendsAddFn from '../../controller/friendsAddFn';
import friendsSearchFn from '../../controller/friendsSearchFn';
import { searchList } from '../../model/friendsSearchList';

function SearchEmail(props) {
    // 리스트 지정.
    const listRef = useRef(null);

    // 리스트 온오프 스위치.
    const [listRefSwitch, setListRefSwitch] = useState(false);
    
    // 친구추가 모달 스위치.
    const [plusModalSwitch, setPlusModalSwitch] = useState(false);
    
    // 검색한 이메일.
    const [searchInput, setSearchInput] = useState({ searchEmail:'' });
    const { searchEmail } = searchInput;

    // input value.
    const inputOnChange = function(e) {
        const { name, value } = e.target;
        setSearchInput({ ...searchInput, [name]: value })
    }
    

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
        onChange={inputOnChange}
        name="searchEmail" 
        value={searchEmail} 
        type="text" 
        placeholder="이메일로 검색해주세요!" 
        />
        <i onClick={() => {
            friendsSearchFn(Number(searchEmail));
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
            <i onClick={() => {
                friendsAddFn(searchList.id);
            }} className="fas fa-check"></i>
            <i onClick={() => {
                   setPlusModalSwitch(!plusModalSwitch);
               }} className="fas fa-times"></i>
            </div>
        </section> : null
        }
       
    </div>
}

export default SearchEmail;