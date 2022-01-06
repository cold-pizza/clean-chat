import { useState } from 'react';
import '../styles/profileimageedit.scss';

function ProfileImageEdit(props) {
    const [imageEdit, setImageEdit] = useState(false);
    return <div className="profile-image-edit">
        { imageEdit ? <BasicImageModal
        history={props.history}
        selectBasicImage={props.selectBasicImage}
        basicImgChange={props.basicImgChange}
        basicImage={props.basicImage} /> : null }
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

function BasicImageModal(props) {
    return <section className="basic-image-modal">
            <p>기본 이미지로 변경하시겠습니까?</p>
            <div>
            <button onClick={() => {
                props.basicImgChange();
            }} className="yes-btn">Yes</button>
            <button onClick={()=>{
                props.history.goBack();
            }} className="no-btn">No</button>
            </div>
        </section>
}

export default ProfileImageEdit;