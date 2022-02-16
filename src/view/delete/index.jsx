import './style.scss';
import { useParams } from 'react-router-dom';

import friendsDeleteFn from '../../controller/friendsDeleteFn';
import { useSelector } from 'react-redux';

function Delete(props) {
    const { id } = useParams();
    const users = useSelector(state => state.stateReducer.users);
    return <div className="delete">
        <div className="form">
        <p>{users[id].name} 님을 삭제하시겠습니까?</p>
        <div className="btns">
            <button onClick={()=>{
                    friendsDeleteFn(users[id].id);
                props.history.push('/friends');
            }} className="delete-btn">삭제</button>
            <button onClick={()=>{
                props.history.goBack();
            }} className="cancel-btn">취소</button>
            </div>
        </div>
    </div>
}

export default Delete;