import './style.scss';
import { useParams } from 'react-router-dom';

import friendsDeleteFn from '../../controller/friendsDeleteFn';
import deleteFriendsCancelFn from '../../controller/deleteFriendsCancelFn';

function Delete(props) {
    const { id } = useParams();
    return <div className="delete">
        <div className="form">
        <p>{props.user[id].name} 님을 삭제하시겠습니까?</p>
        <div className="btns">
            <button onClick={()=>{
                friendsDeleteFn(id);
                props.history.push('/friends');
            }} className="delete-btn">삭제</button>
            <button onClick={()=>{
                deleteFriendsCancelFn(id, props.user, props.setUser);
                props.history.goBack();
            }} className="cancel-btn">취소</button>
            </div>
        </div>
    </div>
}

export default Delete;