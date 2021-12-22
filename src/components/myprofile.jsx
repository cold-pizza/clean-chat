import { useState } from 'react';
import '../styles/myprofile.scss';

function MyProfile(props) {
    // 프로필 편집 모달 state.
    const [onEdit, setOnEdit] = useState(false);
    // 이름 변경 모달 state.
    const [onNameInput, setOnNameInput] = useState(false);
    // 나중에 이름 수정할거 넣을 state.
    const [nameEdit, setNameEdit] = useState(null);
    return <div className="my-profiles">
        <main>
        <nav>
        <i onClick={()=>{
            props.history.goBack();
        }} className="fas fa-chevron-left"></i>
       { !onNameInput ? <i className="fas fa-cog"></i> : <i class="fas fa-check"></i> }
        </nav>
        { onNameInput ? <NameInput /> : null }
        <section>
            <img src="/images/happy.jpg" alt="#" />
            { onEdit ? <i onClick={()=>{
                props.history.push('/myprofile/profileimageedit');
            }} className="fas fa-edit image-edit"></i> : null }
            <p>재홍</p>
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

function NameInput() {
    return <div className="name-input">
        <input type="text" placeholder="이름입력하기" />
    </div>
}

export default MyProfile;