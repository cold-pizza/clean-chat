import '../styles/login.scss';

function Login(props) {
    return <div className="login">
        <h1>클린챗</h1>
        <section id="login-form" action="#">
            <input onChange={props.accountOnChange} name="email" className="email" type="email" placeholder="이메일" />
            <input onChange={props.accountOnChange} name="password" className="password" type="password" placeholder="비밀번호" />
            <button onClick={()=>{
                props.login(props.email, props.password);
            }} className="login-btn" type="submit">로그인</button>
            <button onClick={()=>{
                props.history.push('/signup')
            }} className="signup-btn" type="button">회원가입</button>
        </section>
    </div>
}

export default Login;