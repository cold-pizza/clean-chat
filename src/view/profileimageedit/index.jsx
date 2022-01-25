import axios from 'axios';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import './style.scss';
import BasicImageModal from '../basicImageModal'
import SelectImage from '../selectImage';

function ProfileImageEdit(props) {
    // 기본 이미지 설정 스위치.
    const [basicModalSwitch, setBasicModalSwtich] = useState(false);

    const basicModalSwitchFn = function() {
        setBasicModalSwtich(!basicModalSwitch);
    }

    // 불러온 이미지 url.
    const [imgUrl, setImgUrl] = useState(null);

    // 이미지 선택 모달 스위치.
    const [selectImgSwitch, setSelectImgSwitch] = useState(false);

    // input file dom.
    const imgFileRef = useRef(null);
    // 이미지 넣을 dom.
    const viewImg = useRef(null);

    // 이미지 선택 함수.
    const selectImg = function(e) {
        const reader = new FileReader();
        reader.onload = function(url) {
            const previewImg = document.createElement('img');
            previewImg.setAttribute('src', url.target.result);
            viewImg.current.appendChild(previewImg);
        };
        reader.readAsDataURL(e.target.files[0]);

        const dataFile = new FormData();
        const upLoadFile = e.target.files[0];
        dataFile.append('img', upLoadFile);

        axios.post(`${axios.defaults.baseURL}/api/users/images`, dataFile)
        .then(res => {
            const url = res.data.result.imagePath;
            // console.log(url);
            localStorage.setItem('image', String(url));
            setImgUrl(localStorage.getItem('image'));
            console.log("이미지가 " + res.data.message);
        })
        .catch(err => {
            console.log("이미지 업로드 에러");
            console.log(err);
        })
    };
    // 이미지 변경 함수.
    const upLoadImgFn = function() {
        const arr = { ...props.myAccount };
            arr.imagePath = axios.defaults.baseURL + imgUrl;
            localStorage.setItem('myInfo', JSON.stringify(arr));
            props.setMyAccount(arr);
            // console.log(imgUrl);
        const body = {
            imagePath: imgUrl
        }
        axios.patch(`${axios.defaults.baseURL}/api/users`, body)
        .then(res => {
            console.log("이미지가 " + res.data.message);
            setSelectImgSwitch(!selectImgSwitch);
        })
    }

    useEffect(() => {
        props.setMyAccount(JSON.parse(localStorage.getItem('myInfo')));
    }, [])
    

    // 이미지 선택 취소 함수.
    const selectImgCancel = function() {
        setImgUrl('');
        setSelectImgSwitch(!selectImgSwitch);

    }
    return <div className="profile-image-edit">
        { basicModalSwitch ? 
        <BasicImageModal
        basicModalSwitchFn={basicModalSwitchFn}
        myAccount={props.myAccount}
        setMyAccount={props.setMyAccount}
        history={props.history}
        basicImg={props.basicImg}
       /> : null }
        {
            selectImgSwitch ?
            <SelectImage 
            history={props.history}
            upLoadImgFn={upLoadImgFn} 
            viewImg={viewImg} 
            selectImgCancel={selectImgCancel} 
            /> : null
        }
        <div className="btns">
            <button onClick={()=>{
                setBasicModalSwtich(!basicModalSwitch);
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

export default React.memo(ProfileImageEdit);