import React, { useEffect, useState } from 'react';
import searchOnChange from '../../controller/searchOnChange';
import imageOutputFn from '../../controller/imageOutputFn';
import './style.scss';
import { useSelector } from 'react-redux';

function Search(props) {
    const [search, setSearch] = useState('');
    const users = useSelector(state => state.stateReducer.users);
    const [friends, setFriends] = useState(null);
    useEffect(() => {
        setFriends(users);
    }, [users]);
    return <div className="search">
        <section className="search-form">
        <input value={search} onChange={e => searchOnChange(e, setSearch)} type="text" placeholder="검색" />
        {/* <i className="fas fa-times cancel-btn"></i> */}
        </section>
        <ul>
            {
                friends !== null ?
                friends.filter(friends => {
                if (search === '' || friends.name.includes(search)) return friends;
            }).map(({ name, imagePath, id }, i) => {
                return <li key={id} onClick={() => {
                    props.history.push(`/friends/friendsmodal/${i}`)
                }}>
                <img src={imageOutputFn(imagePath)} 
                alt={imageOutputFn(imagePath)} />
                <p>{name}</p>
            </li>
            })
            :  "친구리스트 NULL" }
        </ul>
    </div>
}

export default React.memo(Search);