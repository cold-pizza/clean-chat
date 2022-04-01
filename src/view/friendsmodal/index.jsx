import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import addChatingRoomFn from "../../controller/addChatingRoomFn";
import imageOutputFn from "../../controller/imageOutputFn";
import "./style.scss";

function FriendsModal() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.stateReducer.users);
    const chatingRoom = useSelector((state) => state.stateReducer.chatingRoom);
    const history = useHistory();
    const { id } = useParams();
    useEffect(() => {
        localStorage.setItem("friendsNumber", id);
    }, []);
    return (
        <div className="friends-modal">
            {users !== null ? (
                <section className="friends-profile">
                    <div className="meta-info">
                        <img
                            src={imageOutputFn(users[id].imagePath)}
                            alt={imageOutputFn(users[id].imagePath)}
                        />
                        <p>{users[id].name}</p>
                    </div>
                    <div className="btns">
                        <button
                            onClick={() => {
                                addChatingRoomFn(
                                    users,
                                    chatingRoom,
                                    dispatch,
                                    history
                                );
                            }}
                            className="chating-btn"
                        >
                            채팅
                        </button>
                        <button
                            onClick={() => {
                                localStorage.removeItem("friendsNumber");
                                history.goBack();
                            }}
                            className="cancel-btn"
                        >
                            뒤로가기
                        </button>
                    </div>
                </section>
            ) : (
                "다시 로그인해 주세요"
            )}
        </div>
    );
}

export default React.memo(FriendsModal);
