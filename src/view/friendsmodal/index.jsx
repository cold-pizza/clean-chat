import { useParams } from 'react-router';
import './style.scss';

function FriendsModal(props) {
    const { id } = useParams();
    return <div className="friends-modal">
        <section className="friends-profile">
            <div className="meta-info">
                <img src={props.user[id].img} alt={props.user[id].img} />
                <p>{props.user[id].name}</p>
            </div>
            <div className="btns">
                <button onClick={()=>{
                    props.plusChatingRoom(id);
                }} className="chating-btn">채팅</button>
                <button onClick={()=>{
                    props.history.goBack();
                }} className="cancel-btn">뒤로가기</button>
            </div>
        </section>
    </div>
}

export default FriendsModal;