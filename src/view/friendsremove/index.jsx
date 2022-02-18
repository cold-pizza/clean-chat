import './style.scss';
import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import imageOutputFn from '../../controller/imageOutputFn';
import Delete from '../delete';

function FriendsRemove(props) {
    const users = useSelector(state => state.stateReducer.users);

    return <div className="friends-remove">
        {
            users !== null ?
            users.map(({ name, imagePath, id }, i)=>{
                return (
            <div key={id} className="item">
                <div className="meta-data">
                    <img src={imageOutputFn(imagePath)} alt={imagePath} />
                    <p>{name}</p> 
                </div>
                <i onClick={()=>{
                    props.history.push(`/setting/friendsremove/delete/${i}`);
                }} className="fas fa-minus"></i>
            </div>
                )
            }
            ) : '친구가 없습니다.' }
            <Route path="/setting/friendsremove/delete/:id" render={() => <Delete history={props.history} />} />
    </div>
}

export default React.memo(FriendsRemove);