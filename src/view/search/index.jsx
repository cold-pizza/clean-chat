import React, { useState } from 'react';
import searchOnChange from '../../controller/searchOnChange';
import imageOutputFn from '../../controller/imageOutputFn';
import './style.scss';
import { useSelector } from 'react-redux';

function Search(props) {
    const [search, setSearch] = useState('');
    const basicImg = useSelector(state => state.basicReducer.basicImg);
    const users = useSelector(state => state.stateReducer.users);
    let array = [...users];
    return <div className="search">
        <section className="search-form">
        <input value={search} onChange={e => searchOnChange(e, setSearch)} type="text" placeholder="검색" />
        <i className="fas fa-times cancel-btn"></i>
        </section>
        <ul>
            {
                users !== null ?
            array.filter(users => {
                if (search === '' || users.name.includes(search)) return users;
            }).map(({ name, imagePath, id }, i)=>{
                return <li key={id} onClick={()=>{
                    props.history.push(`/friends/friendsmodal/${i}`)
                }}>
                <img src={imageOutputFn(imagePath)} alt={imageOutputFn(imagePath)} />
                <p>{name}</p>
            </li>
            })
            :  "친구리스트 NULL" }
        </ul>
    </div>
}

export default React.memo(Search);