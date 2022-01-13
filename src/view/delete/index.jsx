import './style.scss';
import { useParams } from 'react-router-dom';

import friendsDeleteFn from '../../controller/friendsDeleteFn';

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
                props.deleteCancel(id);
                props.history.goBack();
            }} className="cancel-btn">취소</button>
            </div>
        </div>
    </div>
}

export default Delete;