import { useState } from 'react';
import '../styles/myprofile.scss';

function MyProfile(props) {
    // 이름 변경 모달 state.
    const [onNameInput, setOnNameInput] = useState(false);
    // 프로필 편집 모달 state.
    const [onEdit, setOnEdit] = useState(false);

    return <div className="my-profiles">
        <main>
            <nav>
            <i onClick={()=>{
                props.history.push('/friends');
            }} className="fas fa-chevron-left"></i>
            { !onNameInput ? <i className="fas fa-cog"></i> : <i onClick={()=>{
            props.nameChange();
            setOnEdit(!onEdit);
            setOnNameInput(!onNameInput);
        }} className="fas fa-check"></i> }
            </nav>

        { onNameInput ? <NameInput onChange={props.onChange} names={props.names} /> : null }
        <section>
            <img src={props.basicImg} alt="#" />

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

function NameInput(props) {
    return <div className="name-input">
        <input
        onChange={props.onChange}
        name="names"
        type="text"
        placeholder= "이름을 입력해주세요."
        />
    </div>
}


export default MyProfile;