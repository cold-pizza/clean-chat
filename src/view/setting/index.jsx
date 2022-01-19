import './style.scss';
import logoutFn from '../../controller/logoutFn';

function Setting(props) {
    return <div className="setting">
        <div className="btns">
            <button onClick={()=>{
                props.setSettingModalSwitch(!props.setSettingModalSwitch)
                props.history.push('/searchuser');
            }} type="button">친구추가</button>
            <button onClick={()=>{
                props.setSettingModalSwitch(!props.setSettingModalSwitch)
                props.history.push('/friendsremove')
            }} type="button">친구삭제</button>
            <button onClick={()=>{
                props.setSettingModalSwitch(!props.setSettingModalSwitch)
                logoutFn(props.history);
            }}>로그아웃</button>
            <button onClick={()=>{
                props.setSettingModalSwitch(!props.setSettingModalSwitch)
            }} type="button">취소</button>
        </div>
    </div>
}

export default Setting;