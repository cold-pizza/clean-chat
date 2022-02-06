import React from 'react';
import './style.scss';
import logoutFn from '../../controller/logoutFn';
import { useDispatch } from 'react-redux';

function Setting(props) {
    const SETTING_SWITCH = "SETTING_SWITCH";
    const dispatch = useDispatch();

    return <div className="setting">
        <div className="btns">
            <button onClick={()=>{
                dispatch({ type: SETTING_SWITCH });
                props.history.push('/searchuser');
            }} type="button">친구추가</button>
            <button onClick={()=>{
                dispatch({ type: SETTING_SWITCH });
                props.history.push('/friendsremove')
            }} type="button">친구삭제</button>
            <button onClick={()=>{
                dispatch({ type: SETTING_SWITCH });
                logoutFn(props.history);
            }}>로그아웃</button>
            <button onClick={()=>{
                dispatch({ type: SETTING_SWITCH });
            }} type="button">취소</button>
        </div>
    </div>
}

export default React.memo(Setting);