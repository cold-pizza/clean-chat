import { useState, useEffect } from 'react';
import nameChangeFn from '../../controller/nameChangeFn';
import NameInput from '../nameInput';
import './style.scss';

function MyProfile(props) {
    // 이름 변경 모달 state.
    const [onNameInput, setOnNameInput] = useState(false);

    // 프로필 편집 모달 state.
    const [onEdit, setOnEdit] = useState(false);

      // 내 프로필 자동 업데이트.
  useEffect(()=>{
    props.setMyAccount(JSON.parse(localStorage.getItem('myInfo')));
  }, [])

  // 입력받은 닉네임.
  const [nickNameEdit, setNickNameEdit] = useState('');

    // 변경할 이름 input.value 받아오는 함수.
    const nameOnChange = function(e) {
        setNickNameEdit({ ...nickNameEdit, [e.target.name]: e.target.value })
      };
    

    return <div className="my-profiles">
        <main>
            <nav>
            <i onClick={()=>{
                props.history.push('/friends');
            }} className="fas fa-chevron-left"></i>
            { !onNameInput ? <i onClick={() => {
                props.setSettingModalSwitch(!props.settingModalSwitch);
            }} className="fas fa-cog"></i> : <i onClick={()=>{
            nameChangeFn(props.myAccount, props.setMyAccount, nickNameEdit);
            setOnEdit(!onEdit);
            setOnNameInput(!onNameInput);
            setNickNameEdit({ names: '' });
        }} className="fas fa-check"></i> }
            </nav>

        { onNameInput ? <NameInput nameOnChange={nameOnChange} name={props.myAccount.name} /> : null }
        <section>
            <img src={props.myAccount.imagePath} alt={props.myAccount.imagePath} />

            { onEdit ? <i onClick={()=>{
                props.history.push('/myprofile/profileimageedit');
            }} className="fas fa-edit image-edit"></i> : null }

            <p>{props.myAccount !== null ? props.myAccount.name : 'state가 비어있습니다.'}</p>
            
            { onEdit ? <i onClick={()=>{
                setOnNameInput(!onNameInput);
            }} className="fas fa-edit name-edit"></i> : null }
        </section>

        <div className="line"></div>
        <i onClick={()=>{
            setOnEdit(!onEdit);
            if (onNameInput) {
                setOnNameInput(!onNameInput);
            }
        }} className="fas fa-edit edit-btn"></i>
        </main>
    </div>
}



export default MyProfile;