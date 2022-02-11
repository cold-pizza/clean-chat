import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './style.scss';
import addChatingRoomFn from '../../controller/addChatingRoomFn';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function FriendsModal(props) {
    const basicImg = useSelector(state => state.basicReducer.basicImg);
    const history = useHistory();
    const [i, setI] = useState(0); 
    const { id } = useParams() || localStorage.friendsNumber;
    const imageUrl = axios.defaults.baseURL + props.user[id].imagePath;

    useEffect(() => {
        props.setUser(JSON.parse(localStorage.getItem('user')));
        localStorage.setItem("friendsNumber", id);
    }, [])
    return <div className="friends-modal">
        {
            props.user !== null ? 
            <section className="friends-profile">
            <div className="meta-info">
                <img 
                src={props.user[id].imagePath !== '' ? imageUrl : basicImg} 
                alt={props.user[id].imagePath !== '' ? imageUrl : basicImg} 
                />
                <p>{props.user[id].name}</p>
            </div>
            <div className="btns">
                <button onClick={()=>{
                    addChatingRoomFn(props.user[id].id);
                    history.push(`/chatingroom/${id}`);
                }} className="chating-btn">채팅</button>
                <button onClick={()=>{
                    localStorage.removeItem("friendsNumber");
                    history.goBack();
                }} className="cancel-btn">뒤로가기</button>
            </div>
        </section> : '다시 로그인해 주세요'
            }
    </div>
}

export default React.memo(FriendsModal);