import React, { useState, useRef } from 'react';
import './style.scss';
import loginFn from '../../controller/loginFn';
import onChange from '../../controller/onChange';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function Login(props) {
    const dispatch = useDispatch();
const basicImg = useSelector(state => state.basicReducer.basicImg);
const buttonActiveSwitch = useSelector(state => state.switchReducer.buttonActiveSwitch);
const myAccount = useSelector(state => state.stateReducer.myAccount);
const [idInput, setIdInput] = useState({ loginId: "", loginPs: "" });
const { loginId, loginPs } = idInput;
const btnRef = useRef(null);

    return <div className="login">
        <h1>클린챗</h1>
        <section id="login-form" action="#">
            <input 
            onChange={e => onChange(e, idInput, setIdInput)} 
            name="loginId" 
            value={loginId}
            className="email" 
            type="email" 
            placeholder="이메일" 
            />
            <input 
            onChange={e => onChange(e, idInput, setIdInput)}  
            name="loginPs" 
            value={loginPs}
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