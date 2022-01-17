import './style.scss';

import selectDeleteFriends from '../../controller/selectDeleteFriends';


function FriendsRemove(props) {
    // ********************
    // idx -> 친구추가시 idx추가 예정. 만들면 밑에 변수 user.id로 변경.
        // ********************



    return <div className="friends-remove">
        {
            props.user !== null ?
            props.user.map(({ name }, i)=>{
                return (
            <div className="item">
                <div className="meta-data">
                    <img src={props.basicImg} alt={props.basicImg} />
                    <p>{name}</p> 
                </div>
                <i onClick={()=>{
                    selectDeleteFriends(i, props.user);
                    props.history.push(`/friendsremove/delete/${i}`);
                }} className="fas fa-minus"></i>
            </div>
                )
            }
            ) : '친구가 없습니다.' }
    </div>
}

export default FriendsRemove;