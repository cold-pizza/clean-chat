import '../styles/setting.scss';

function Setting(props) {
    return <div className="setting">
        <div className="btns">
            <button onClick={()=>{
                props.history.push('/searchemail');
            }} type="button">친구추가</button>
            <button onClick={()=>{
                props.history.push('/friendsremove')
            }} type="button">친구삭제</button>
            <button onClick={()=>{
                props.history.goBack();
            }} type="button">취소</button>
        </div>
    </div>
}

export default Setting;