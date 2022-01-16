import './style.scss';

import selectDeleteFriends from '../../controller/selectDeleteFriends';


function FriendsRemove(props) {
    // ********************
    // idx -> 친구추가시 idx추가 예정. 만들면 밑에 변수 user.id로 변경.
        // ********************

    const id = props.user.length - 1;
    console.log(props.user)
    return <div className="friends-remove">
        {
            props.user !== null ?
            props.user.map(({ name })=>{
                return (
            <div className="item">
                <div className="meta-data">
                    <img src={props.basicImg} alt={props.basicImg} />
                    <p>{name}</p> 
                </div>
                <i onClick={()=>{
                    selectDeleteFriends(id, props.user);
                    props.history.push(`/friendsremove/delete/${id}`);
                }} className="fas fa-minus"></i>
            </div>
                )
            }
            ) : '친구가 없습니다.' }
    </div>
}

export default FriendsRemove;