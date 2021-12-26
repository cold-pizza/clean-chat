import { useEffect } from 'react';
import '../styles/signup.scss';

function Signup(props) {
    // 첫 렌더링시 성별.
    useEffect(()=>{
        let item = "male";
        props.setGender(item);
    }, [])
    return <div className="signup">
        <h1>회원가입</h1>
        <form id="signup-form" action="/">
            <input onChange={props.joinOnChange} name="name" type="text" id="name" placeholder="이름" required/>
            <input onChange={props.joinOnChange} name="id" type="email" id="email" placeholder="이메일" required/>
            <input onChange={props.joinOnChange} name="password" type="password" id="password" placeholder="비밀번호" required/>
            {/* <input type="password" placeholder="비밀번호 확인" required/> */}
            <div className="gender">
                <button
                    style={{ background: props.selectGender ? "white" : "#ACC6FF",
                                color: props.selectGender ? "#808080" : "white" }}
                    className="male-btn"
                    type="button"
                    onClick={()=>{
                       props.setSelectGender(!props.selectGender);
                       props.genderSelectFn(props.selectGender);
                   }}>남</button>
                <button 
                    style={{ background: props.selectGender ? "#ACC6FF" : "white",
                                color: props.selectGender ? "white" : "#808080" }}
                    className="female-btn"
                    type="button"
                    onClick={()=>{
                        props.setSelectGender(!props.selectGender);
                        props.genderSelectFn(props.selectGender);
                    }}
                >여</button>
            </div>
            <button onClick={()=>{
                props.signupFn();
            }} className="signup-btn" type="submit">완료</button>
            <button className="cancel-btn" onClick={()=>{
                props.history.goBack();
            }} type="button">취소</button>
        </form>
    </div>
}

export default Signup;