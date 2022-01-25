import React, { useState } from 'react';
import './style.scss';
import loginFn from '../../controller/loginFn';
import accountOnChange from '../../controller/accountOnChange';

function Login(props) {

const [idInput, setIdInput] = useState({ loginId: "", loginPs: "" });
const { loginId, loginPs } = idInput;

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
                    props.chatingRoom,
                    props.setChatingRoom,
                    props.history
                    );
            }} className="login-btn" type="submit">로그인</button>
            <button onClick={()=>{
                props.history.push('/signup')
            }} className="signup-btn" type="button">회원가입</button>
        </section>
    </div>
}

export default Login;