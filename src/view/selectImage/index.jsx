import './style.scss';
import upLoadImgFn from '../../controller/upLoadImgFn';

function SelectImage(props) {
    return <section className="select-image">
        <div ref={props.viewImg} className="img-box"></div>
        <p>이미지를 변경하시겠습니까?</p>
        <div className="img-btns">
            <button onClick={() => {
                upLoadImgFn(
                    props.imgUrl, 
                    props.myAccount, 
                    props.setMyAccount, 
                    props.selectImgswitch, 
                    props.setSelectImgSwitch
                    );
                props.history.push('/myprofile');
            }}>Yes</button>
            <button onClick={() => {
                props.selectImgCancel();
            }}>No</button>
        </div>
    </section>
}

export default SelectImage;