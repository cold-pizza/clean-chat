import './style.scss';
import React, { useEffect } from 'react';
import imageOutputFn from '../../controller/imageOutputFn';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Friends(props) {    
    const dispatch = useDispatch();
    const basicImg = useSelector(state => state.basicImg);

    useEffect(()=>{
        props.setMyAccount(JSON.parse(localStorage.getItem('myInfo')));
        props.setUser(JSON.parse(localStorage.getItem('user')));
        props.setChatingRoom(JSON.parse(localStorage.getItem('chatingRoom')));
        return console.log('업데이트 되었습니다.');
      }, []);
      
    return <div className="friends">
        <section onClick={()=>{
            props.history.push('/myprofile');
        }} className="my-profile">
            <img src={props.myAccount !== null ? props.myAccount.imagePath : basicImg } alt="#" />
            <p>{props.myAccount !== null ? props.myAccount.name : '로딩중입니다.'}</p>
        </section>
        <div className="friends-number">
            <p>친구 {props.user !== null ? props.user.length : 0 }</p>
        </div>
        <ul className="friends-list">
        {
            props.user !== null ?
            props.user.map(({ name, imagePath, id }, i)=>{
                return (
                <li key={id} onClick={()=>{
                    props.history.push(`/friends/friendsmodal/${i}`)
                }}>
                    <img 
                    src={imagePath !== "" ? imageOutputFn(imagePath) : basicImg} 
                    alt={imagePath !== "" ? imageOutputFn(imagePath) : basicImg} 
                    />
                    <p>{name}</p>
                </li>
                )
            }) : '친구가 없습니다.'
        }
        </ul>
        {/* <button onClick={() => {
            dispatch({type: "SWITCH_ALARM"});
        }}>채팅알림</button>
        <button onClick={() => {
            dispatch({ type: "SWITCH_CHATING_BUBBLE" })
        }}>채팅풍선알림</button> */}
    </div>
}

export default React.memo(Friends);