import './style.scss';
import React from 'react';

function FriendsRemove(props) {

    return <div className="friends-remove">
        {
            props.user !== null ?
            props.user.map(({ name, imagePath, id }, i)=>{
                return (
            <div key={id} className="item">
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

export default React.memo(FriendsRemove);