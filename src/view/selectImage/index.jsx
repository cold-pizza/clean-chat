import './style.scss';
import upLoadImgFn from '../../controller/upLoadImgFn';
import { useDispatch, useSelector } from 'react-redux';

function SelectImage(props) {
    const dispatch = useDispatch();
    const myAccount = useSelector(state => state.stateReducer.myAccount);
    const SWITCH_IMG_SELECTION = "SWITCH_IMG_SELECTION";
    
    return <section className="select-image">
        <div ref={props.viewImg} className="img-box"></div> 
        <p>이미지를 변경하시겠습니까?</p>
        <div className="img-btns">
            <button onClick={() => {
                upLoadImgFn(myAccount, dispatch);
                dispatch({ type: SWITCH_IMG_SELECTION }); 
                props.history.push('/myprofile'); 
            }}>Yes</button>
            <button onClick={() => {
                dispatch({ type: SWITCH_IMG_SELECTION });
            }}>No</button>
        </div>
    </section>
}

export default SelectImage;