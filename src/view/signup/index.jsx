import { useEffect, useState } from 'react';
import './style.scss';

import signupFn from '../../controller/signupFn';
// import changeGenderFn from '../../controller/changeGenderFn';
import selectGenderFn from '../../controller/selectGenderFn';
import React, { useCallback } from 'react';


function Signup(props) {

    const [genderSwitch, setGenderSwitch] = useState(false);

    const [joinAccount, setJoinAccount] = useState({ 
        name: '', 
        id: '', 
        password: '', 
        psCheck: '', 
        gender: '', 
        imagePath: '' 
    });
    
    const joinOnChange = useCallback(function(e) {
        setJoinAccount({ ...joinAccount, [e.target.name]: e.target.value })
      }, []);
    
    // 첫 렌더링시 성별.
    useEffect(()=>{
        const arr = { ...joinAccount }
        arr.gender = 'male';
        setJoinAccount(arr);
    }, [])

    return <div className="signup">
        <h1>회원가입</h1>
        <div className="password-comment">
        <p>비밀번호는 6자리 ~ 20자리 이하,</p>
        <p>영문, 숫자, 특수문자 중 2가지 이상 혼합하여 입력해주세요.</p>
        </div>
        <section id="signup-form">
            <input 
            onChange={joinOnChange} 
            name="name" 
            type="text" 
            id="name" 
            placeholder="이름" 
            required
            />
            <input 
            onChange={joinOnChange} 
            name="id" 
            type="email" 
            id="email" 
            placeholder="이메일" 
            required
            />
            <input 
            onChange={joinOnChange} 
            name="password" 
            type="password" 
            id="password" 
            placeholder="비밀번호" 
            required
            />
            <input 
            onChange={joinOnChange} 
            type="password" 
            name="psCheck" 
            placeholder="비밀번호 확인" 
            required
            />
            <div className="gender">
                <button
                    style={{ background: genderSwitch ? "white" : "#2647ff",
                                color: genderSwitch ? "#808080" : "white" }}
                    className="male-btn"
                    type="button"
                    onClick={()=>{
                        setGenderSwitch(!genderSwitch);
                       selectGenderFn(genderSwitch, joinAccount, setJoinAccount);
                   }}>남</button>
                <button 
                    style={{ background: genderSwitch ? "#2647ff" : "white",
                                color: genderSwitch ? "white" : "#808080" }}
                    className="female-btn"
                    type="button"
                    onClick={()=>{
                        setGenderSwitch(!genderSwitch);
                        selectGenderFn(genderSwitch, joinAccount, setJoinAccount);
                    }}
                >여</button>
            </div>
            <button onClick={()=>{
                signupFn(joinAccount, setJoinAccount, props.history);
            }} className="signup-btn" type="submit">완료</button>
            <button className="cancel-btn" onClick={()=>{
                props.history.goBack();
            }} type="button">취소</button>
        </section>
    </div>
}

export default React.memo(Signup);