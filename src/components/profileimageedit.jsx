import { useState } from 'react';
import '../styles/profileimageedit.scss';

function ProfileImageEdit(props) {
    const [imageEdit, setImageEdit] = useState(false);
    return <div className="profile-image-edit">
        { imageEdit ? <ImageSelect
        history={props.history}
        selectBasicImage={props.selectBasicImage}
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

function ImageSelect(props) {
    return <section>
            <div className="imgs1">
            {
                props.basicImage.map(({ img, id })=>{
                   return (
                   <img key={id} onClick={()=>{
                       props.selectBasicImage(id);
                       props.history.push('/myprofile');
                   }} src={img} alt={img} />
               
                   )
                })
            }
            </div>
    
            <i className="fas fa-chevron-up"></i>
            <p>선택해주세요!</p>
        </section>
}

export default ProfileImageEdit;