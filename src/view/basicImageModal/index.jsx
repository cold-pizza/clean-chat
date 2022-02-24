import './style.scss';
import basicImgChangeFn from "../../controller/basicImgChangeFn";
import { useSelector, useDispatch } from 'react-redux';

function BasicImageModal(props) {
    const basicImg = useSelector(state => state.basicReducer.basicImg);
    const myAccount = useSelector(state => state.stateReducer.myAccount);
    const dispatch = useDispatch();
    const SWITCH_BASIC_MODAL = "SWITCH_BASIC_MODAL";

    return <section className="basic-image-modal">
            <p>기본 이미지로 변경하시겠습니까?</p>
            <div>
            <button onClick={() => {
                basicImgChangeFn(myAccount, basicImg, dispatch);
                dispatch({ type: SWITCH_BASIC_MODAL });
                props.history.push('/myprofile');
            }} className="yes-btn">Yes</button>
            <button onClick={()=>{
                dispatch({ type: SWITCH_BASIC_MODAL });
            }} className="no-btn">No</button>
            </div>
        </section>
}

export default BasicImageModal;