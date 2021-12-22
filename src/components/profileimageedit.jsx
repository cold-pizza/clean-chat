import { useState } from 'react';
import '../styles/profileimageedit.scss';

function ProfileImageEdit(props) {
    const [imageEdit, setImageEdit] = useState(false);
    return <div className="profile-image-edit">
        { imageEdit ? <ImageSelect /> : null }
        <div className="btns">
            <button onClick={()=>{
                setImageEdit(!imageEdit);
            }} type="button">기본 이미지 설정</button>
            <label htmlFor="image-file">
            <p>이미지 불러오기</p>
            </label>
            <button onClick={()=>{
                props.history.goBack();
            }} type="button">취소</button>
        </div>
        <input type="file" id="image-file" />
    </div>
}

function ImageSelect() {
    return <section>
            <div className="imgs1">
                <img src="/images/happy.jpg" alt="#" />
                <img src="/images/1.jpg" alt="#" />
                <img src="/images/2.jpg" alt="#" />
                <img src="/images/3.jpg" alt="#" />
                <img src="/images/4.jpg" alt="#" />
            </div>
    
            <i className="fas fa-chevron-up"></i>
            <p>선택해주세요!</p>
        </section>
}

export default ProfileImageEdit;