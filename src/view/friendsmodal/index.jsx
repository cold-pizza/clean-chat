import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './style.scss';
import addChatingRoomFn from '../../controller/addChatingRoomFn';

function FriendsModal(props) {
    const [chatingRoom, setChatingRoom] = useState([]);

    const history = useHistory(); 
    const { id } = useParams();
    const idx = props.user.length - 1;
    return <div className="friends-modal">
        {
            props.user !== null ? 
            <section className="friends-profile">
            <div className="meta-info">
                <img src={props.basicImg} alt={props.basicImg} />
                <p>{props.user[idx].name}</p>
            </div>
            <div className="btns">
                <button onClick={()=>{
                    addChatingRoomFn(id, props.user, chatingRoom, setChatingRoom, history);
                }} className="chating-btn">채팅</button>
                <button onClick={()=>{
                    history.goBack();
                }} className="cancel-btn">뒤로가기</button>
            </div>
        </section> : '다시 로그인해 주세요'
            }
    </div>
}

export default FriendsModal;