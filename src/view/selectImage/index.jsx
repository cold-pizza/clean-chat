import './style.scss';
import upLoadImgFn from '../../controller/upLoadImgFn';
import { useDispatch } from 'react-redux';

function SelectImage(props) {
    const SELECT_IMG_SWITCH = "SELECT_IMG_SWITCH";
    const dispatch = useDispatch();
    return <section className="select-image">
        <div ref={props.viewImg} className="img-box"></div>
        <p>이미지를 변경하시겠습니까?</p>
        <div className="img-btns">
            <button onClick={() => {
                upLoadImgFn(props.myAccount, props.setMyAccount);
                dispatch({ type: SELECT_IMG_SWITCH });
                props.history.push('/myprofile'); 
            }}>Yes</button>
            <button onClick={() => {
                dispatch({ type: SELECT_IMG_SWITCH });
            }}>No</button>
        </div>
    </section>
}

export default SelectImage;