import './style.scss';
import basicImgChangeFn from "../../controller/basicImgChangeFn";

function BasicImageModal(props) {
    return <section className="basic-image-modal">
            <p>기본 이미지로 변경하시겠습니까?</p>
            <div>
            <button onClick={() => {
                basicImgChangeFn(props.myAccount, props.setMyAccount, props.basicImg);
                props.basicModalSwitchFn();
                props.history.push('/myprofile');
            }} className="yes-btn">Yes</button>
            <button onClick={()=>{
                props.history.goBack();
            }} className="no-btn">No</button>
            </div>
        </section>
}

export default BasicImageModal;