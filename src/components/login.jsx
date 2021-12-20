import '../styles/login.scss';

function Login(props) {
    return <div className="login">
        <h1>클린챗</h1>
        <form id="login-form" action="/friends">
            <input className="email" type="email" placeholder="이메일" />
            <input className="password" type="password" placeholder="비밀번호" />
            <button className="login-btn" type="submit">로그인</button>
            <button onClick={()=>{
                props.history.push('/signup')
            }} className="signup-btn" type="button">회원가입</button>
        </form>
    </div>
}

export default Login;