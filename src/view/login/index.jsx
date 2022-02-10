import React, { useState, useRef } from 'react';
import './style.scss';
import loginFn from '../../controller/loginFn';
import accountOnChange from '../../controller/accountOnChange';
import { useSelector } from 'react-redux';

function Login(props) {
const basicImg = useSelector(state => state.stateReducer.basicImg);
const [idInput, setIdInput] = useState({ loginId: "", loginPs: "" });
const { loginId, loginPs } = idInput;
const btnRef = useRef(null);
const [btnValue, setBtnValue] = useState(false);

    return <div className="login">
        <h1>클린챗</h1>
        <section id="login-form" action="#">
            <input 
            onChange={(e) => accountOnChange(e, idInput, setIdInput)} 
            name="loginId" 
            value={props.loginId}
            className="email" 
            type="email" 
            placeholder="이메일" 
            />
            <input 
            onChange={(e) => accountOnChange(e, idInput, setIdInput)}  
            name="loginPs" 
            value={props.loginPs}
            className="password" 
            type="password" 
            placeholder="비밀번호" 
            />
            <button onClick={()=>{
                loginFn(
                    loginId, 
                    loginPs, 
                    setIdInput, 
                    props.setMyAccount, 
                    props.setUser,
                    props.setChatingRoom,
                    basicImg,
                    btnValue,
                    setBtnValue,
                    props.history
                    );
            }} 
            className="login-btn" 
            type="submit" 
            disabled={btnValue} 
            ref={btnRef} 
            style={{ background: btnValue ? "#828282" : "#2647ff" }}
            >{ btnValue ? "Loading.." : "로그인" }</button>
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