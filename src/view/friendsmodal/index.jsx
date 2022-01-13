import { useParams, useHistory } from 'react-router-dom';
import './style.scss';
import addChatingRoomFn from '../../controller/addChatingRoomFn';

function FriendsModal(props) {
    const history = useHistory();
    const { id } = useParams();
    return <div className="friends-modal">
        <section className="friends-profile">
            <div className="meta-info">
                <img src={props.user[id].img} alt={props.user[id].img} />
                <p>{props.user[id].name}</p>
            </div>
            <div className="btns">
                <button onClick={()=>{
                    addChatingRoomFn(id, history);
                }} className="chating-btn">채팅</button>
                <button onClick={()=>{
                    history.goBack();
                }} className="cancel-btn">뒤로가기</button>
            </div>
        </section>
    </div>
}

export default FriendsModal;