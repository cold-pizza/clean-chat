import React, { useState, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.scss';
import onChange from '../../controller/onChange';
import loginFn from '../../controller/loginFn';

function Login(props) {
    const dispatch = useDispatch();
    const basicImg = useSelector(state => state.basicReducer.basicImg);
    const myAccount = useSelector(state => state.stateReducer.myAccount);
    const buttonActiveSwitch = useSelector(state => state.switchReducer.buttonActiveSwitch);
    const [idInput, setIdInput] = useState({ loginId: "", loginPs: "" });
    const { loginId, loginPs } = idInput;
    const btnRef = useRef(null);

    // const onChangeCallback = useCallback(e => onChange(e, idInput, setIdInput), [idInput]);

    return <div className="login">
        <h1>클린챗</h1>
        <form id="login-form">
            <input 
            onChange={e => onChange(e, idInput, setIdInput)} 
            name="loginId" 
            className="email" 
            type="email" 
            placeholder="이메일" 
            />
            <input 
            onChange={e => onChange(e, idInput, setIdInput)}  
            name="loginPs" 
            className="password" 
            type="password" 
            placeholder="비밀번호" 
            />
            <button 
            type="submit"
            onClick={e => {
                loginFn(e, loginId, loginPs, basicImg, myAccount, props.history, dispatch, setIdInput);
            }} 
            className="login-btn"
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
        </form>
    </div>
}

export default React.memo(Login);