import React, { useState, useEffect } from 'react';
// import { Route } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import nameChangeFn from '../../controller/nameChangeFn';
import onChange from '../../controller/onChange';
import NameInput from '../nameInput';
import './style.scss';
// import ProfileImageEdit from '../profileimageedit';

function MyProfile(props) {
    const dispatch = useDispatch();
    const MY_EDIT_SWITCH = "SWITCH_MY_EDIT";
    const NAME_INPUT_SWITCH = "SWITCH_NAME_INPUT";
    const nameInputSwitch = useSelector(state => state.switchReducer.nameInputSwitch);
    const myEditSwitch = useSelector(state => state.switchReducer.myEditSwitch);
    const myAccount = useSelector(state => state.stateReducer.myAccount);
    const [nickNameEdit, setNickNameEdit] = useState('');    
  useEffect(()=>{
    dispatch({ type: "SET_MY_ACCOUNT", payload: JSON.parse(localStorage.getItem('myInfo')) });
    return console.log('내 계정 업데이트');
  }, [])
    return <div className="my-profiles">
        <main>
            <nav>
            <i onClick={()=>{
                props.history.push('/friends');
                if (myEditSwitch) {
                    dispatch({ type: MY_EDIT_SWITCH });
                }
            }} className="fas fa-chevron-left"></i>
            { 
            !nameInputSwitch ? <i onClick={() => {
                dispatch({ type: "SWITCH_SETTING" }); 
            }} className="fas fa-cog"></i>
             : <i onClick={()=>{
            nameChangeFn(myAccount, nickNameEdit, dispatch);
            dispatch({ type: MY_EDIT_SWITCH });
            dispatch({ type: NAME_INPUT_SWITCH });
            setNickNameEdit({ names: '' });
        }} className="fas fa-check"></i> 
        }
        </nav>

        {
         nameInputSwitch ? 
        <NameInput 
        onChange={e => onChange(e, nickNameEdit, setNickNameEdit)} 
        name={myAccount !== null ? myAccount.name : null } /> : null 
        }
        <section>
            <img 
            src={myAccount !== null ? myAccount.imagePath : null} 
            alt={myAccount !== null ? myAccount.imagePath : null} />

            { myEditSwitch ? <i onClick={()=>{
                props.history.push('/myprofile/profileimageedit');
            }} className="fas fa-edit image-edit"></i> : null }

            <p>{myAccount !== null ? myAccount.name : 'NULL'}</p>
            
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

        {/* <Route path="/myprofile/profileimageedit">
        <ProfileImageEdit 
        myAccount={myAccount}
        setMyAccount={setMyAccount}
        history={history}
        />
      </Route> */}
    </div>
}



export default MyProfile;