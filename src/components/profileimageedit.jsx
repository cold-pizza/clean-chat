import axios from 'axios';
import { useState, useRef } from 'react';
import '../styles/profileimageedit.scss';

function ProfileImageEdit(props) {
    // 기본 이미지 설정 스위치.
    const [imageEdit, setImageEdit] = useState(false);

    // 불러온 이미지 url.
    const [imgUrl, setImgUrl] = useState('');

    // 이미지 선택 모달 스위치.
    const [selectImgSwitch, setSelectImgSwitch] = useState(false);

    // input file dom.
    const imgFileRef = useRef(null);

    // 이미지 넣을 dom.
    const viewImg = useRef(null);

    // 이미지 선택 함수.
    const selectImg = function(e) {
        const reader = new FormData();
        const upLoadFile = e.target.files[0]
        reader.append('img', upLoadFile);

        axios.post('https://clean-chat.kumas.dev/api/users/images', reader)
        .then((res) => {
            setImgUrl(`https://clean-chat.kumas.dev${res.data.result.imagePath}`);
            console.log(res.data);
            console.log('이미지 업로드 성공');
        })
        .catch(err => {
            console.log(err);
        })
    }
    // 이미지 변경 함수.
    const upLoadImg = function() {
       // myAccount.imagePath -> imgUrl 변경.
       const arr = { ...props.myAccount };
       arr.imagePath = imgUrl;
       props.setMyAccount(arr);
       setSelectImgSwitch(!selectImgSwitch);
       console.log('변경 완료')
    }
    

    // 이미지 선택 취소 함수.
    const selectImgCancel = function() {
        setImgUrl('');
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
            <SelectImage upLoadImg={upLoadImg} viewImg={viewImg} selectImgCancel={selectImgCancel} /> : null
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
        <form action="https://clean-chat.kumas.dev/api/users/images" method="POST">
        <input type="file" id="image-file" ref={imgFileRef} onChange={selectImg} />
        </form>
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
            <button onClick={() => {
                props.upLoadImg();
            }}>Yes</button>
            <button onClick={() => {
                props.selectImgCancel();
            }}>No</button>
        </div>
    </section>
}

export default ProfileImageEdit;