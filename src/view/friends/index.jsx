import './style.scss';
import { useEffect } from 'react';

function Friends(props) {
    
    useEffect(()=>{
        props.setMyAccount(JSON.parse(localStorage.getItem('myInfo')));
        props.setUser(JSON.parse(localStorage.getItem('user')));
      }, [])

    return <div className="friends">
        <section onClick={()=>{
            props.history.push('/myprofile');
        }} className="my-profile">
            <img src={props.myAccount !== null ? props.myAccount.imagePath : null} alt="#" />
            <p>{props.myAccount !== null ? props.myAccount.name : '로딩중입니다.'}</p>
        </section>
        <div className="friends-number">
            <p>친구 {props.user.length !== 0 ? props.user.length : 0 }</p>
        </div>
        <ul className="friends-list">
        {
            props.user.length !== 0 ?
            props.user.map(({ id, name })=>{
                return (
                <li onClick={()=>{
                    props.history.push(`/friends/friendsmodal/${id}`)
                }}>
                    <img src={props.basicImg} alt={props.basicImg} />
                    <p>{name}</p>
                </li>
                )
            }) : '다시 로그인해 주세요'
        }
        </ul>
        
    </div>
}

export default Friends;