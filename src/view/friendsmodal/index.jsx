import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import addChatingRoomFn from '../../controller/addChatingRoomFn';
import imageOutputFn from '../../controller/imageOutputFn';
import './style.scss';

function FriendsModal(props) {
    const dispatch = useDispatch();
    const basicImg = useSelector(state => state.basicReducer.basicImg);
    const users = useSelector(state => state.stateReducer.users);
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        dispatch({ type: "SET_MY_ACCOUNT", payload: JSON.parse(localStorage.getItem("myInfo")) });
        localStorage.setItem("friendsNumber", id);
    }, [])
    return <div className="friends-modal">
        {
            props.user !== null ? 
            <section className="friends-profile">
            <div className="meta-info">
                <img 
                src={imageOutputFn(users[id].imagePath, basicImg)} 
                alt={imageOutputFn(users[id].imagePath, basicImg)} 
                />
                <p>{users[id].name}</p>
            </div>
            <div className="btns">
                <button onClick={()=>{
                    addChatingRoomFn(users[id].id);
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