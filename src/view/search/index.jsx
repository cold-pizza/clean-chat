import axios from 'axios';
import { useState } from 'react';
import searchOnChange from '../../controller/searchOnChange';
import './style.scss';


function Search(props) {
    const [search, setSearch] = useState('');

    return <div className="search">
        <section className="search-form">
        <input value={search} onChange={(e) => searchOnChange(e, setSearch)} type="text" placeholder="검색" />
        <i className="fas fa-times cancel-btn"></i>
        </section>
        <ul>
            {
            props.user.filter(user => {
                if (search === '') {
                    return user;
                } else if (user.name.includes(search)) {
                    return user;
               }
            }).map(({ name, imagePath, id })=>{
                return <li key={id} onClick={()=>{
                    props.history.push(`/friends/friendsmodal/${id}`)
                }}>
                <img 
                src={imagePath !== '' ? axios.defaults.baseURL + imagePath : props.basicImg} 
                alt={imagePath !== '' ? axios.defaults.baseURL + imagePath : props.basicImg} />
                <p>{name}</p>
            </li>
            })
            }
        </ul>
    </div>
}

export default Search;