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
                props.history.goBack();
            }} className="fas fa-chevron-left"></i>
            { !onNameInput ? <i className="fas fa-cog"></i> : <i onClick={()=>{
            props.nameChange();
            setOnEdit(!onEdit);
            setOnNameInput(!onNameInput);
        }} className="fas fa-check"></i> }
            </nav>

        { onNameInput ? <NameInput onChange={props.onChange} name={props.name} /> : null }
        <section>
            <img src={props.img} alt="#" />

            { onEdit ? <i onClick={()=>{
                props.history.push('/myprofile/profileimageedit');
            }} className="fas fa-edit image-edit"></i> : null }

            <p>{props.name}</p>
            
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
        name="name"
        type="text"
        placeholder={props.name}
        />
    </div>
}

export default MyProfile;