import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import nameChangeFn from '../../controller/nameChangeFn';
import nameOnChange from '../../controller/nameOnChange';
import NameInput from '../nameInput';
import './style.scss';

function MyProfile(props) {
    const dispatch = useDispatch();
    const MY_EDIT_SWITCH = "MY_EDIT_SWITCH";
    const NAME_INPUT_SWITCH = "NAME_INPUT_SWITCH";

    const nameInputSwitch = useSelector(state => state.nameInputSwitch);
    const myEditSwitch = useSelector(state => state.myEditSwitch);
    const [nickNameEdit, setNickNameEdit] = useState('');    
  useEffect(()=>{
    props.setMyAccount(JSON.parse(localStorage.getItem('myInfo')));
    return console.log('내 계정 업데이트');
  }, [])
    return <div className="my-profiles">
        <main>
            <nav>
            <i onClick={()=>{
                props.history.push('/friends');
            }} className="fas fa-chevron-left"></i>
            { 
            !nameInputSwitch ? <i onClick={() => {
                dispatch({ type: "SETTING_SWITCH" });
            }} className="fas fa-cog"></i>
             : <i onClick={()=>{
            nameChangeFn(props.myAccount, props.setMyAccount, nickNameEdit);
            dispatch({ type: MY_EDIT_SWITCH });
            dispatch({ type: NAME_INPUT_SWITCH });
            setNickNameEdit({ names: '' });
        }} className="fas fa-check"></i> 
        }
            </nav>

        { nameInputSwitch ? 
        <NameInput 
        nameOnChange={(e) => nameOnChange(e, nickNameEdit, setNickNameEdit)} 
        name={props.myAccount.name} /> : null }
        <section>
            <img src={props.myAccount.imagePath} alt={props.myAccount.imagePath} />

            { myEditSwitch ? <i onClick={()=>{
                props.history.push('/myprofile/profileimageedit');
            }} className="fas fa-edit image-edit"></i> : null }

            <p>{props.myAccount !== null ? props.myAccount.name : 'state가 비어있습니다.'}</p>
            
            { myEditSwitch ? <i onClick={()=>{
                dispatch({ type: NAME_INPUT_SWITCH });
            }} className="fas fa-edit name-edit"></i> : null }
        </section>

        <div className="line"></div>
        <i onClick={()=>{
            dispatch({ type: MY_EDIT_SWITCH });
            if (nameInputSwitch) {
                dispatch({ type: NAME_INPUT_SWITCH });
            }
        }} className="fas fa-edit edit-btn"></i>
        </main>
    </div>
}



export default React.memo(MyProfile);