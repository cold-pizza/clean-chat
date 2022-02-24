import React, { useEffect } from 'react';
import { Route } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import NameInput from '../nameInput';
import './style.scss';
import ProfileImageEdit from '../profileimageedit';
import imageOutputFn from '../../controller/imageOutputFn';

function MyProfile(props) {
    const dispatch = useDispatch();
    const MY_EDIT_SWITCH = "SWITCH_MY_EDIT";
    const NAME_INPUT_SWITCH = "SWITCH_NAME_INPUT";
    const nameInputSwitch = useSelector(state => state.switchReducer.nameInputSwitch);
    const myEditSwitch = useSelector(state => state.switchReducer.myEditSwitch);
    const myAccount = useSelector(state => state.stateReducer.myAccount); 
  useEffect(()=>{
    return console.log('내 계정 업데이트');
  }, [])
    return <div className="my-profiles">
        <main>
            <nav>
            <i onClick={()=>{
                props.history.push('/friends');
                if (myEditSwitch) dispatch({ type: MY_EDIT_SWITCH });
                if (nameInputSwitch) dispatch({ type: NAME_INPUT_SWITCH });
            }} className="fas fa-chevron-left"></i>
            {/* <i onClick={() => {
                props.history.push('/setting');
            }} className="fas fa-cog"></i> */}
        </nav>

        { nameInputSwitch ? <NameInput name={myAccount?.name || null } /> : null }
        <section>
            <img 
            src={imageOutputFn(myAccount.imagePath)} 
            alt={imageOutputFn(myAccount.imagePath)} />

            { myEditSwitch ? <i onClick={()=>{
                props.history.push('/myprofile/profileimageedit');
            }} className="fas fa-edit image-edit"></i> : null }

            <p>{myAccount?.name || 'NULL'}</p>
            
            { myEditSwitch ? <i onClick={()=>{
                dispatch({ type: NAME_INPUT_SWITCH });
            }} className="fas fa-edit name-edit"></i> : null }
        </section>

        <div className="line"></div>
        <i onClick={()=>{
            dispatch({ type: MY_EDIT_SWITCH });
            if (nameInputSwitch) dispatch({ type: NAME_INPUT_SWITCH });
        }} className="fas fa-edit edit-btn"></i>
        </main>
        <Route path="/myprofile/profileimageedit" render={() => <ProfileImageEdit history={props.history} />} />
    </div>
}



export default MyProfile;