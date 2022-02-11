import React, { useState } from 'react';
import searchOnChange from '../../controller/searchOnChange';
import imageOutputFn from '../../controller/imageOutputFn';
import './style.scss';
import { useSelector } from 'react-redux';
import { useEffect } from 'react/cjs/react.development';
import { useHistory } from 'react-router';


function Search(props) {
    const [search, setSearch] = useState('');
    const history = useHistory();
    const basicImg = useSelector(state => state.basicReducer.basicImg);
    return <div className="search">
        <section className="search-form">
        <input value={search} onChange={(e) => searchOnChange(e, setSearch)} type="text" placeholder="검색" />
        <i className="fas fa-times cancel-btn"></i>
        </section>
        <ul>
            {
                props.user !== null ?
            props.user.filter(user => {
                if (search === '') {
                    return user;
                } else if (user.name.includes(search)) {
                    return user;
               }
            }).map(({ name, imagePath, id }, i)=>{
                return <li key={id} onClick={()=>{
                    props.history.push(`/friends/friendsmodal/${i}`)
                }}>
                <img 
                src={imagePath !== '' ? imageOutputFn(imagePath) : basicImg} 
                alt={imagePath !== '' ? imageOutputFn(imagePath) : basicImg} />
                <p>{name}</p>
            </li>
            })
            :  "친구리스트 NULL" }
        </ul>
    </div>
}

export default React.memo(Search);