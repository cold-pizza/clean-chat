import React, { useState, useRef, useEffect } from 'react';
import './style.scss';
import BasicImageModal from '../basicImageModal'
import SelectImage from '../selectImage';
import selectImgFn from '../../controller/selectImgFn';

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

    useEffect(() => {
        props.setMyAccount(JSON.parse(localStorage.getItem('myInfo')));
        return console.log('내 정보 업데이트');
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
       /> : null }
        {
            selectImgSwitch ?
            <SelectImage 
            imgUrl={imgUrl}
            myAccount={props.myAccount}
            setMyAccount={props.setMyAccount}
            history={props.history}
            viewImg={viewImg} 
            selectImgCancel={selectImgCancel} 
            selectImgSwitch={selectImgSwitch}
            setSelectImgSwitch={setSelectImgSwitch}
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
        <input 
        type="file" 
        id="image-file" 
        ref={imgFileRef} 
        onChange={e => selectImgFn(e, viewImg, setImgUrl)} 
        />
    </div>
}

export default React.memo(ProfileImageEdit);