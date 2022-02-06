import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './style.scss';
import addChatingRoomFn from '../../controller/addChatingRoomFn';
import axios from 'axios';
import { useSelector } from 'react-redux';

function FriendsModal(props) {
    const basicImg = useSelector(state => state.basicImg);
    const history = useHistory(); 
    const { id } = useParams();
    return <div className="friends-modal">
        {
            props.user !== null ? 
            <section className="friends-profile">
            <div className="meta-info">
                <img 
                src={props.user[id].imagePath !== '' ? axios.defaults.baseURL + props.user[id].imagePath : basicImg} 
                alt={props.user[id].imagePath !== '' ? axios.defaults.baseURL + props.user[id].imagePath : basicImg} 
                />
                <p>{props.user[id].name}</p>
            </div>
            <div className="btns">
                <button onClick={()=>{
                    addChatingRoomFn(id, props.user, props.chatingRoom, props.setChatingRoom);
                    history.push(`/chatingroom/${id}`);
                }} className="chating-btn">채팅</button>
                <button onClick={()=>{
                    history.goBack();
                }} className="cancel-btn">뒤로가기</button>
            </div>
        </section> : '다시 로그인해 주세요'
            }
    </div>
}

export default React.memo(FriendsModal);