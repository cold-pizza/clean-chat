import './style.scss';


function FriendsRemove(props) {
    return <div className="friends-remove">

        {
            props.user.map(({ name, id, img })=>{
                return (
            <div className="item">
                <div className="meta-data">
                    <img src={img} alt={img} />
                    <p>{name}</p>
                </div>
                <i onClick={()=>{
                    props.deleteModal(id);
                    props.history.push(`/friendsremove/delete/${id}`);
                }} className="fas fa-minus"></i>
            </div>
                )
            })}
    </div>
}

export default FriendsRemove;