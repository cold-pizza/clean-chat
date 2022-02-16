import React, { useRef, useEffect } from 'react';
import './style.scss';
import BasicImageModal from '../basicImageModal'
import SelectImage from '../selectImage';
import selectImgFn from '../../controller/selectImgFn';
import { useSelector, useDispatch } from 'react-redux';

function ProfileImageEdit(props) {
    const dispatch = useDispatch();
    const basicModalSwitch = useSelector(state => state.switchReducer.basicModalSwitch);
    const selectImgSwitch = useSelector(state => state.switchReducer.selectImgSwitch);
    const imgFileRef = useRef(null);
    const viewImg = useRef(null);

    useEffect(() => {
        dispatch({ type: "SET_MY_ACCOUNT", payload: JSON.parse(localStorage.getItem('myInfo')) });
        return console.log('내 정보 업데이트');
    }, [])
    
    return <div className="profile-image-edit">
        { basicModalSwitch ? <BasicImageModal history={props.history}/> : null }
        { selectImgSwitch ? <SelectImage history={props.history} viewImg={viewImg} /> : null }
        <div className="btns">
            <button onClick={()=>{
                dispatch({ type: "SWITCH_BASIC_MODAL" });
            }} type="button">기본 이미지 설정</button>
            <label htmlFor="image-file">
            <p onClick={() => {
                dispatch({ type: "SWITCH_IMG_SELECTION" });
            }}>이미지 불러오기</p>
            </label>
            <button onClick={()=>{
                props.history.goBack();
                dispatch({ type: "SWITCH_MY_EDIT" });
            }} type="button">취소</button>
        </div>
        <input 
        type="file" 
        id="image-file" 
        ref={imgFileRef} 
        onChange={e => selectImgFn(e, viewImg)} 
        />
    </div>
}

export default ProfileImageEdit;