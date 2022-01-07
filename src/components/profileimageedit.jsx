
import { useState, useRef } from 'react';
import '../styles/profileimageedit.scss';

function ProfileImageEdit(props) {
    const [imageEdit, setImageEdit] = useState(false);

    const [imgUrl, setImgUrl] = useState('');


    // 이미지 선택 모달 스위치.
    const [selectImgSwitch, setSelectImgSwitch] = useState(false);

    // input file dom.
    const imgFileRef = useRef(null);

    // 이미지 넣을 dom.
    const viewImg = useRef(null);

    // 이미지 선택 함수.
    const selectImg = function(url) {
        const reader = new FileReader();

        reader.onload = function(url) {
            const previewImg = document.createElement('img');
            previewImg.setAttribute('src', url.target.result);
            viewImg.current.appendChild(previewImg);
        }

        reader.readAsDataURL(url.target.files[0]);
        console.log(url.target.value)
        setImgUrl(url.target.files[0]);
    }

    // 이미지 변경 함수.
    const upLoadImg = function() {
        // imgUrl을 내 계정 imagePath에 저장하기 
    }

    // 이미지 선택 취소 함수. done
    const selectImgCancel = function() {
        imgFileRef.current.value = null;
        setSelectImgSwitch(!selectImgSwitch);

    }
    return <div className="profile-image-edit">
        { imageEdit ? <BasicImageModal
        history={props.history}
        selectBasicImage={props.selectBasicImage}
        basicImgChange={props.basicImgChange}
        basicImage={props.basicImage} /> : null }
        {
            selectImgSwitch ?
            <SelectImage viewImg={viewImg} selectImgCancel={selectImgCancel} /> : null
        }
        <div className="btns">
            <button onClick={()=>{
                setImageEdit(!imageEdit);
            }} type="button">기본 이미지 설정</button>
            <label htmlFor="image-file">
            <p onClick={() => {
                setSelectImgSwitch(!selectImgSwitch);
            }}>이미지 불러오기</p>
            </label>
            <button onClick={()=>{
                props.history.goBack();
            }} type="button">취소</button>
        </div>
        <input type="file" id="image-file" ref={imgFileRef} onChange={selectImg} />
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

function SelectImage(props) {
    return <section className="select-image">
        <div ref={props.viewImg} className="img-box"></div>
        <p>이미지를 변경하시겠습니까?</p>
        <div className="img-btns">
            <button>Yes</button>
            <button onClick={() => {
                props.selectImgCancel();
            }}>No</button>
        </div>
    </section>
}

export default ProfileImageEdit;