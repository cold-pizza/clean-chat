import './style.scss';

function FriendsRemove(props) {

    return <div className="friends-remove">
        {
            props.user !== null ?
            props.user.map(({ name, imagePath }, i)=>{
                return (
            <div className="item">
                <div className="meta-data">
                    <img src={imagePath} alt={imagePath} />
                    <p>{name}</p> 
                </div>
                <i onClick={()=>{
                    props.history.push(`/friendsremove/delete/${i}`);
                }} className="fas fa-minus"></i>
            </div>
                )
            }
            ) : '친구가 없습니다.' }
    </div>
}

export default FriendsRemove;