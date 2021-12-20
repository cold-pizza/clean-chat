import '../styles/signup.scss';
import { useState } from 'react';

function Signup(props) {
    const [selectGender, setSelectGender] = useState(false);
    return <div className="signup">
        <h1>회원가입</h1>
        <form id="signup-form" action="/">
            <input type="text" id="name" placeholder="이름" required/>
            <input type="email" id="email" placeholder="이메일" required/>
            <input type="password" id="password" placeholder="비밀번호" required/>
            {/* <input type="password" placeholder="비밀번호 확인" required/> */}
            <div className="gender">
                <button
                    style={{ background: selectGender ? "white" : "#ACC6FF",
                                color: selectGender ? "#808080" : "white" }}
                    className="male-btn"
                    type="button"
                    value="male"
                    onClick={()=>{
                       setSelectGender(!selectGender);
                   }}>남</button>
                <button 
                    style={{ background: selectGender ? "#ACC6FF" : "white",
                                color: selectGender ? "white" : "#808080" }}
                    className="female-btn"
                    type="button"
                    value="female"
                    onClick={()=>{
                        setSelectGender(!selectGender);
                    }}
                >여</button>
            </div>
            <button className="signup-btn" type="submit">완료</button>
            <button className="cancel-btn" onClick={()=>{
                props.history.goBack();
            }} type="button">취소</button>
        </form>
    </div>
}

export default Signup;