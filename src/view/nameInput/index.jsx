import './style.scss';
import { useState } from 'react';
import nameChangeFn from '../../controller/nameChangeFn';
import onChange from '../../controller/onChange';
import { useDispatch, useSelector } from 'react-redux';

function NameInput(props) {
    const dispatch = useDispatch();
    const myAccount = useSelector(state => state.stateReducer.myAccount);
    const [nickName, setNickName] = useState(null); 
    return <div className="name-input">
        <input
        onChange={e => onChange(e, nickName, setNickName)}
        name="name"
        type="text"
        placeholder= {props.name}
        />
        <i onClick={()=>{
            nameChangeFn(myAccount, nickName, dispatch);
            dispatch({ type: "SWITCH_MY_EDIT" });
            dispatch({ type: "SWITCH_NAME_INPUT" });
            setNickName(null);
        }} className="fas fa-check"></i> 
    </div>
}

export default NameInput;