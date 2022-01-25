import './style.scss';
import React, { useEffect } from 'react';

// import chatMsgSearchFn from '../../controller/chatMsgSearchFn';

function Friends(props) {    
    useEffect(()=>{
        props.setMyAccount(JSON.parse(localStorage.getItem('myInfo')));
        return console.log('내 계정이 업데이트 되었습니다.');
      }, []);

    useEffect(() => {
        props.setUser(JSON.parse(localStorage.getItem('user')));
        return console.log('친구리스트가 업데이트 되었습니다');
    }, []);

    useEffect(() => {
        props.setChatingRoom(JSON.parse(localStorage.getItem('chatingRoom')));
        return console.log('채팅방이 업데이트 되었습니다');
    }, []);

console.log(props.myAccount.imagePath)
    return <div className="friends">
        <section onClick={()=>{
            props.history.push('/myprofile');
        }} className="my-profile">
            <img src={props.myAccount !== null ? props.myAccount.imagePath : props.basicImg } alt="#" />
            <p>{props.myAccount !== null ? props.myAccount.name : '로딩중입니다.'}</p>
        </section>
        <div className="friends-number">
            <p>친구 {props.user !== null ? props.user.length : 0 }</p>
        </div>
        <ul className="friends-list">
        {
            props.user !== null ?
            props.user.map(({ name, imagePath }, i)=>{
                return (
                <li onClick={()=>{
                    props.history.push(`/friends/friendsmodal/${i}`)
                }}>
                    <img src={props.basicImg} alt={props.basicImg} />
                    <p>{name}</p>
                </li>
                )
            }) : '친구가 없습니다.'
        }
        </ul>
        
    </div>
}

export default React.memo(Friends);