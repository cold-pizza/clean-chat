import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.scss';
import onChange from '../../controller/onChange';
import loginFn from '../../controller/loginFn';
import chatAlarm from '../../controller/chatAlarmFn';

function Login(props) {
    const dispatch = useDispatch();
    const basicImg = useSelector(state => state.basicReducer.basicImg);
    const messageData = useSelector(state => state.stateReducer.message);
    const myAccount = useSelector(state => state.stateReducer.myAccount);
    const buttonActiveSwitch = useSelector(state => state.switchReducer.buttonActiveSwitch);
    const [idInput, setIdInput] = useState({ loginId: "", loginPs: "" });
    const { loginId, loginPs } = idInput;
    const btnRef = useRef(null);

    //   useEffect(() => {
    //     chatAlarm(messageData, dispatch);
    //   }, [dispatch, messageData]);

    const onChangeCallback = useCallback(e => onChange(e, idInput, setIdInput), [idInput]);

    return <div className="login">
        <h1>클린챗</h1>
        <section id="login-form" action="#">
            <input 
            onChange={e => onChangeCallback(e)} 
            name="loginId" 
            className="email" 
            type="email" 
            placeholder="이메일" 
            />
            <input 
            onChange={e => onChangeCallback(e)}  
            name="loginPs" 
            className="password" 
            type="password" 
            placeholder="비밀번호" 
            />
            <button onClick={async ()=>{
                loginFn(loginId, loginPs, basicImg, myAccount, props.history, dispatch, setIdInput);
            }} 
            className="login-btn"
            type="submit"
            disabled={buttonActiveSwitch}
            ref={btnRef} 
            style={{ background: buttonActiveSwitch ? "#828282" : "#2647ff" }}
            >{ buttonActiveSwitch ? "Loading.." : "로그인" }</button>
            <button onClick={()=>{
                props.history.push('/signup')
            }} 
            className="signup-btn" 
            type="button"
            >회원가입</button>
        </section>
    </div>
}

export default React.memo(Login);